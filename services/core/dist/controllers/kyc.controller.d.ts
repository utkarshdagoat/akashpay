import { RequestWithUser } from "@/interfaces/auth.interface";
import { KYCService } from "@/services/kyc.service";
import { NextFunction, Response, Request } from "express";
export declare class KYCController {
    kyc: KYCService;
    createKYC: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateKYCStatus: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getKYC: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<void>;
}
