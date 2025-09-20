/*
  Warnings:

  - Added the required column `amount` to the `payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."payment" ADD COLUMN     "amount" INTEGER NOT NULL;
