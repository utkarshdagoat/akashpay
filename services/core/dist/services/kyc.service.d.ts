import { KYC } from '@prisma/client';
import { CreateKYCDto } from '@/dtos/kyc.dto';
import { kycStatus } from '@prisma/client';
export declare class KYCService {
    kyc: import(".prisma/client").Prisma.KYCDelegate<import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation, import("@prisma/client/runtime").DefaultArgs>;
    createKYC(data: CreateKYCDto, userId: number): Promise<any>;
    getKycStatus(userId: number): Promise<any>;
    updateKycStatus(userId: number, status: kycStatus): Promise<any>;
    getKyc(userId: number): Promise<KYC>;
}
