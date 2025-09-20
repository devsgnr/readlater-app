// app/api/cron/payments/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma-client";
import createAnnualPayments from "../v1/create-payment";

export async function POST(req: NextRequest) {
  const Auth = req.headers.get("Authorization");

  if (Auth !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await createAnnualPayments(prisma);

    console.log({ ok: true, ...result });
    return NextResponse.json({ ok: true, ...result });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: "Failed" }, { status: 500 });
  }
}
