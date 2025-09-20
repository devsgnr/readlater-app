"use server";

import { prisma } from "@/lib/prisma-client";

export async function getMembershipFess() {
  return await prisma.membershipFee.findMany();
}
