-- CreateEnum
CREATE TYPE "kycStatus" AS ENUM ('INTIALISED', 'INPROCESS', 'APPROVED', 'REJECTED', 'NOTSUBMITTED');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "kycStatus" "kycStatus" NOT NULL DEFAULT 'NOTSUBMITTED';

-- CreateTable
CREATE TABLE "KYC" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "idNumber" TEXT NOT NULL,
    "idFront" TEXT NOT NULL,
    "idBack" TEXT NOT NULL,
    "selfie" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "KYC_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "KYC_userId_key" ON "KYC"("userId");

-- AddForeignKey
ALTER TABLE "KYC" ADD CONSTRAINT "KYC_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
