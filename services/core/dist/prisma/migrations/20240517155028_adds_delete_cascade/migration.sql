-- DropForeignKey
ALTER TABLE "KYC" DROP CONSTRAINT "KYC_userId_fkey";

-- AddForeignKey
ALTER TABLE "KYC" ADD CONSTRAINT "KYC_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
