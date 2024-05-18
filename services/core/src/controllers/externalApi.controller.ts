import { ExternalApiService } from "@/services/externalApi.service";
import { Request, Response, NextFunction } from "express";
import { SessionDto } from "@/dtos/session.dto";
import { PaymentUtil } from "@/utils/paymentUtil";

export class ExternalApiController {
    public externalApiService = new ExternalApiService();
    public createSession = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const sessionData: SessionDto = req.body;
            const [token, session] = await this.externalApiService.creatSession(sessionData);
            console.log(session)
            res.status(201).json({ data: { token }, message: 'Session Created' });
        } catch (error) {
            next(error);
        }
    }
    public getData = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const session = await this.externalApiService.getSession(req.body.email);
            res.status(200).json({ data: session, message: 'Session Data' });
        } catch (error) {
            next(error);
        }
    }
    constructor() {
        this.ethToNoble = this.ethToNoble.bind(this);
        this.convertToOsmo = this.convertToOsmo.bind(this);
        this.getDataFromToken = this.getDataFromToken.bind(this);
    }

    public async ethToNoble(req: Request, res: Response, next: NextFunction) {
        try {
            const session = await this.externalApiService.getSession(req.body.email);
            const amount = session.amount;
            const txHash = await PaymentUtil.ethToNoble(amount);
            res.status(200).json({ data: txHash, message: 'Transaction Successful' });
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    public async convertToOsmo(req: Request, res: Response, next: NextFunction) {
        try {
            const session = await this.externalApiService.getSession(req.body.email);
            const amount = session.amount.toString();
            const wallet = session.walletAddress
            const txHash = await PaymentUtil.convertToOsmo(amount, wallet);
            if (!txHash) {
                res.status(500).json({ message: 'Transaction Failed' });
            } else {
                res.status(200).json({ data: txHash, message: 'Transaction Successful' });
            }

        } catch (error) {
            console.log(error);
            next(error);
        }
    }
   

    public async getDataFromToken(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const token = req.header('Access-Token').split(' ')[1];
            const session = await this.externalApiService.getSessionToken(token);
            const wallet = session.walletAddress;
            const amount = session.amount
            res.status(200).json({ wallet, amount });

        } catch (error) {
            next(error);
        }
    }
}