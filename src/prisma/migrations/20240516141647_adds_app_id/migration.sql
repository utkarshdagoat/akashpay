/*
  Warnings:

  - You are about to drop the column `callbackUris` on the `application` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "application" DROP COLUMN "callbackUris",
ADD COLUMN     "appId" TEXT;
