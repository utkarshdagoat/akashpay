/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Session` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Session_email_key" ON "Session"("email");
