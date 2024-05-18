/*
  Warnings:

  - A unique constraint covering the columns `[clientSecret]` on the table `application` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[appId]` on the table `application` will be added. If there are existing duplicate values, this will fail.
  - Made the column `appId` on table `application` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "application" ALTER COLUMN "appId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "application_clientSecret_key" ON "application"("clientSecret");

-- CreateIndex
CREATE UNIQUE INDEX "application_appId_key" ON "application"("appId");
