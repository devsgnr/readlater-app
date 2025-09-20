/*
  Warnings:

  - Added the required column `tier` to the `membershipFee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."membershipFee" ADD COLUMN     "tier" TEXT NOT NULL;
