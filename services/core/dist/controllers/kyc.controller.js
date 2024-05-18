"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KYCController = void 0;
const tslib_1 = require("tslib");
const kyc_service_1 = require("@/services/kyc.service");
const typedi_1 = tslib_1.__importDefault(require("typedi"));
class KYCController {
    constructor() {
        this.kyc = typedi_1.default.get(kyc_service_1.KYCService);
        this.createKYC = async (req, res, next) => {
            try {
                const userId = req.body.userId;
                const kycData = req.body.data;
                const createKYC = await this.kyc.createKYC(kycData, userId);
                res.status(201).json({ data: createKYC, message: 'KYC created' });
            }
            catch (error) {
                next(error);
            }
        };
        this.updateKYCStatus = async (req, res, next) => {
            try {
                const userId = Number(req.body.id);
                const { status } = req.body;
                const updateStatus = await this.kyc.updateKycStatus(userId, status);
                res.status(200).json({ data: updateStatus, message: 'KYC status updated' });
            }
            catch (error) {
                next(error);
            }
        };
        this.getKYC = async (req, res, next) => {
            try {
                const userId = req.user.id;
                const kycStatus = await this.kyc.getKycStatus(userId);
                res.status(200).json({ data: kycStatus, message: 'KYC status retrieved' });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.KYCController = KYCController;
//# sourceMappingURL=kyc.controller.js.map