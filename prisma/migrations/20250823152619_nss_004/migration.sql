/*
  Warnings:

  - You are about to drop the column `memberId` on the `payment` table. All the data in the column will be lost.
  - Added the required column `userId` to the `payment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."payment" DROP CONSTRAINT "payment_memberId_fkey";

-- AlterTable
ALTER TABLE "public"."payment" DROP COLUMN "memberId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."payment" ADD CONSTRAINT "payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
