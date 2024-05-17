import { NextFunction, Request, Response } from 'express';
import { PaymentUtil } from '@/utils/paymentUtil';
import { RequestWithUser } from '@/interfaces/auth.interface';

export class PaymentController {
    public async ethToNoble(req: RequestWithUser, res: Response, next: NextFunction) {
        try {
            const { amount } = req.body;
            const txHash = await PaymentUtil.ethToNoble(amount);
            res.status(200).json({ data: { txHash }, message: 'Transaction Successful' });
        } catch (error) {
            next(error);
        }
    }
    public async convertToOsmo(req: RequestWithUser, res: Response, next: NextFunction) {
        try {
            const { amount , wallet } = req.body;
            const txHash = await PaymentUtil.convertToOsmo(amount , wallet);
            res.status(200).json({ data: { txHash }, message: 'Transaction Successful' });
        } catch (error) {
            next(error);
        }
    }
}