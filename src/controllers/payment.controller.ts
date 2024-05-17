import { NextFunction, Request, Response } from 'express';
import { PaymentUtil } from '@/utils/paymentUtil';
import { RequestWithUser } from '@/interfaces/auth.interface';
import { PrismaClient } from '@prisma/client';

export class PaymentController {
    public transaction = new PrismaClient().transaction;

    constructor() {
        this.ethToNoble = this.ethToNoble.bind(this);
        this.convertToOsmo = this.convertToOsmo.bind(this);
    }

    public async ethToNoble(req: RequestWithUser, res: Response, next: NextFunction) {
        try {
            const { amount } = req.body;
            const txHash = await PaymentUtil.ethToNoble(amount);
            res.status(200).json({ data: { txHash }, message: 'Transaction Successful' });
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    public async convertToOsmo(req: RequestWithUser, res: Response, next: NextFunction) {
        try {
            console.log(this); // Now this will correctly refer to the instance of PaymentController
            const tx = await this.transaction.findFirst({
                orderBy: {
                    createdAt: 'desc'
                },
                where: {
                    userId: req.user.id,
                }
            });
            console.log(tx);
            if (!tx) {
                res.status(400).json({ message: 'No transaction found' });
            } else {
                const wallet = tx.walletAddress;
                const amount = (tx.amount * 1000000).toString();
                // console.log(wallet, amount);
                const txHash = await PaymentUtil.convertToOsmo(amount, wallet);
                if (!txHash) {
                    res.status(500).json({ message: 'Transaction Failed' });
                } else {
                    res.status(200).json({ data: { txHash }, message: 'Transaction Successful' });
                }
            }
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}
