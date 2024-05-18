"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentController = void 0;
const paymentUtil_1 = require("@/utils/paymentUtil");
const client_1 = require("@prisma/client");
class PaymentController {
    constructor() {
        this.transaction = new client_1.PrismaClient().transaction;
        this.ethToNoble = this.ethToNoble.bind(this);
        this.convertToOsmo = this.convertToOsmo.bind(this);
    }
    async ethToNoble(req, res, next) {
        try {
            const { amount } = req.body;
            const txHash = await paymentUtil_1.PaymentUtil.ethToNoble(amount);
            res.status(200).json({ data: txHash, message: 'Transaction Successful' });
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }
    async convertToOsmo(req, res, next) {
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
            }
            else {
                const wallet = tx.walletAddress;
                const amount = (tx.amount * 1000000).toString();
                // console.log(wallet, amount);
                const txHash = await paymentUtil_1.PaymentUtil.convertToOsmo(amount, wallet);
                if (!txHash) {
                    res.status(500).json({ message: 'Transaction Failed' });
                }
                else {
                    res.status(200).json({ data: txHash, message: 'Transaction Successful' });
                }
            }
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }
}
exports.PaymentController = PaymentController;
//# sourceMappingURL=payment.controller.js.map