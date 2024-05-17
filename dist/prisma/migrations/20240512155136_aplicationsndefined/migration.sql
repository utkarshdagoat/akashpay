/*
  Warnings:

  - Added the required column `creatorId` to the `application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "application" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "creatorId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "application" ADD CONSTRAINT "application_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
