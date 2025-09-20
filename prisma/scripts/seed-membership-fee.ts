import { GetTiers } from "@/app/api/hooks/queries/tiers";
import { prisma } from "@/lib/prisma-client";
import ServerClient from "@/lib/server-graphql-client";
import { SeedTierResponse } from "@/types/home";

async function main() {
  // 1. Get all tiers from HygraphCMS
  const data = await ServerClient.request<SeedTierResponse>(GetTiers);

  // 2. Map the data into Prisma format
  const fees = data.nSSMembershipTiers.map((fee) => ({
    tier: fee.tier,
    amount: fee.price,
    description: fee.description,
  }));

  // 3. Bulk insert
  await prisma.membershipFee.createMany({
    data: fees,
    skipDuplicates: true, // 👈 avoids duplicates on reruns (based on unique constraints)
  });

  console.log(`✅ Seeded ${fees.length} membership fees successfully`);
}

main()
  .catch((e) => {
    console.error("❌ Error seeding data", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
