/*
  Warnings:

  - A unique constraint covering the columns `[userId,periodMonth,periodYear]` on the table `payment` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."member" ADD COLUMN     "lastPayDate" TIMESTAMP(3),
ADD COLUMN     "membershipFee" INTEGER;

-- AlterTable
ALTER TABLE "public"."payment" ADD COLUMN     "paymentDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "periodMonth" INTEGER,
ADD COLUMN     "periodYear" INTEGER;

-- CreateIndex
CREATE INDEX "member_lastPayDate_idx" ON "public"."member"("lastPayDate");

-- CreateIndex
CREATE INDEX "payment_periodMonth_periodYear_idx" ON "public"."payment"("periodMonth", "periodYear");

-- CreateIndex
CREATE UNIQUE INDEX "payment_userId_periodMonth_periodYear_key" ON "public"."payment"("userId", "periodMonth", "periodYear");
