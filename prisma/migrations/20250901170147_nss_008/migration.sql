/*
  Warnings:

  - Made the column `revoked` on table `member` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."member" ALTER COLUMN "revoked" SET NOT NULL,
ALTER COLUMN "revoked" SET DEFAULT false;
