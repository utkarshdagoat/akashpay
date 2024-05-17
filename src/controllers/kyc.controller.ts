import { RequestWithUser } from "@/interfaces/auth.interface";
import { KYCService } from "@/services/kyc.service";
import { NextFunction, Response  , Request} from "express";
import Container from "typedi";


export class KYCController{
    public kyc = Container.get(KYCService);

    public createKYC = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.body.userId;
            const kycData = req.body.data;
            const createKYC = await this.kyc.createKYC(kycData, userId);
            res.status(201).json({ data: createKYC, message: 'KYC created' });
        } catch (error) {
            next(error);
        }
    }

    public updateKYCStatus = async (req: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            const userId = req.user.id;
            const { status } = req.body;
            const updateStatus = await this.kyc.updateKycStatus(userId, status);
            res.status(200).json({ data: updateStatus, message: 'KYC status updated' });
        } catch (error) {
            next(error);
        }
    }

    public getKYC = async (req: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            const userId = req.user.id;
            const kycStatus = await this.kyc.getKycStatus(userId);
            res.status(200).json({ data: kycStatus, message: 'KYC status retrieved' });
        } catch (error) {
            next(error);
        }
    }
}