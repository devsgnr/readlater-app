/*
  Warnings:

  - You are about to drop the column `membershipFee` on the `member` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[membershipFeeId]` on the table `member` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `membershipFeeId` to the `member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."member" DROP COLUMN "membershipFee",
ADD COLUMN     "access_role" TEXT,
ADD COLUMN     "membershipFeeId" TEXT NOT NULL,
ADD COLUMN     "revoked" BOOLEAN;

-- CreateTable
CREATE TABLE "public"."membershipFee" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "membershipFee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "member_membershipFeeId_key" ON "public"."member"("membershipFeeId");

-- AddForeignKey
ALTER TABLE "public"."member" ADD CONSTRAINT "member_membershipFeeId_fkey" FOREIGN KEY ("membershipFeeId") REFERENCES "public"."membershipFee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
