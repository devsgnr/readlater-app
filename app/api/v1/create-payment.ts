import type { PrismaClient } from "@prisma/client";
import { InitializePaystackPayment } from "./payments";

const bulkIncrementTotalDue = async (prisma: PrismaClient, userDues: Record<string, number>) => {
  if (Object.keys(userDues).length === 0) return;

  const cases = Object.entries(userDues)
    .map(([userId, amount]) => `WHEN '${userId}' THEN "totalDue" + ${amount}`)
    .join(" ");

  const userIds = Object.keys(userDues)
    .map((id) => `'${id}'`)
    .join(", ");

  const sql = `
    UPDATE "member"
    SET "totalDue" = CASE "userId"
      ${cases}
    END,
      "status" = 'inactive'
    WHERE "userId" IN (${userIds});
  `;

  await prisma.$executeRawUnsafe(sql);
};

const createAnnualPayments = async (prisma: PrismaClient) => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1; // JS months are 0-based

  const gte = new Date(`${currentYear - 1}-${String(currentMonth).padStart(2, "0")}-01`);
  const lt = new Date(`${currentYear - 1}-${String(currentMonth).padStart(2, "0")}-31`);

  // 🔹 Step 1: Get members who should be billed this month
  const members = await prisma.member.findMany({
    where: {
      AND: [
        {
          lastPaymentDate: {
            gte: gte,
            lt: lt,
          },
        },
      ],
    },
    include: {
      user: true,
      membershipFee: true,
    },
  });

  if (members.length === 0) {
    console.log("No members due for payment this month.");
    return;
  }

  // 🔹 Step 2: Bulk insert payments
  const payments: any[] = [];
  const dues: Record<string, number> = {};

  for (const m of members) {
    const res = await InitializePaystackPayment({
      email: m.user.email,
      amount: m.membershipFee.amount.toString(),
    });

    const { access_code } = res.data;

    payments.push({
      userId: m.userId,
      amount: m.membershipFee.amount,
      description: `Annual Dues - ${m.membershipFee.tier}`,
      periodMonth: currentMonth - 1,
      periodYear: currentYear,
      accessCode: access_code,
    });

    // 🔹 Step 3: Create userId -> amount key-value pair
    dues[m.userId] = (dues[m.userId] || 0) + m.membershipFee.amount;
  }

  // 🔹 Step 4: Finally make bulk `createMany`
  await prisma.payment.createMany({
    data: payments,
    skipDuplicates: true, // avoids duplicates if cron runs twice accidentally
  });

  // 🔹 Step 5: Add totalDues for each member
  await bulkIncrementTotalDue(prisma, dues);

  const response = {
    count: payments.length,
    message: `✅ Created ${payments.length} annual payments and updated total due.`,
  };

  return response;
};

export default createAnnualPayments;
