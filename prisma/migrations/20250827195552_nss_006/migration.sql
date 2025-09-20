/*
  Warnings:

  - You are about to drop the column `lastPayDate` on the `member` table. All the data in the column will be lost.
  - Made the column `membershipFee` on table `member` required. This step will fail if there are existing NULL values in that column.
  - Made the column `periodMonth` on table `payment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `periodYear` on table `payment` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "public"."member_lastPayDate_idx";

-- AlterTable
ALTER TABLE "public"."member" DROP COLUMN "lastPayDate",
ADD COLUMN     "lastPaymentDate" TIMESTAMP(3),
ALTER COLUMN "membershipFee" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."payment" ALTER COLUMN "paymentDate" DROP NOT NULL,
ALTER COLUMN "paymentDate" DROP DEFAULT,
ALTER COLUMN "periodMonth" SET NOT NULL,
ALTER COLUMN "periodYear" SET NOT NULL;

-- CreateIndex
CREATE INDEX "member_lastPaymentDate_idx" ON "public"."member"("lastPaymentDate");
