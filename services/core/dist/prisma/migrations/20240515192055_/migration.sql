/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `OTP` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "emailVerified" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "OTP_code_key" ON "OTP"("code");
