"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalApiController = void 0;
const externalApi_service_1 = require("@/services/externalApi.service");
const paymentUtil_1 = require("@/utils/paymentUtil");
class ExternalApiController {
    constructor() {
        this.externalApiService = new externalApi_service_1.ExternalApiService();
        this.createSession = async (req, res, next) => {
            try {
                const sessionData = req.body;
                const [token, session] = await this.externalApiService.creatSession(sessionData);
                res.status(201).json({ data: { token }, message: 'Session Created' });
            }
            catch (error) {
                next(error);
            }
        };
        this.getData = async (req, res, next) => {
            try {
                const session = await this.externalApiService.getSession(req.body.email);
                res.status(200).json({ data: session, message: 'Session Data' });
            }
            catch (error) {
                next(error);
            }
        };
        this.ethToNoble = this.ethToNoble.bind(this);
        this.convertToOsmo = this.convertToOsmo.bind(this);
    }
    async ethToNoble(req, res, next) {
        try {
            const session = await this.externalApiService.getSession(req.body.email);
            const amount = session.amount;
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
            const session = await this.externalApiService.getSession(req.body.email);
            const amount = session.amount.toString();
            const wallet = session.walletAddress;
            const txHash = await paymentUtil_1.PaymentUtil.convertToOsmo(amount, wallet);
            if (!txHash) {
                res.status(500).json({ message: 'Transaction Failed' });
            }
            else {
                res.status(200).json({ data: txHash, message: 'Transaction Successful' });
            }
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }
    async getDataFromToken(req, res, next) {
        try {
            const token = req.header('Access-Token').split(' ')[1];
            const session = await this.externalApiService.getSessionToken(token);
            const wallet = session.walletAddress;
            const amount = session.amount;
            res.status(200).json({ wallet, amount });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.ExternalApiController = ExternalApiController;
//# sourceMappingURL=externalApi.controller.js.map