"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KYCService = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const client_1 = require("@prisma/client");
const HttpException_1 = require("@/exceptions/HttpException");
const client_2 = require("@prisma/client");
let KYCService = class KYCService {
    constructor() {
        this.kyc = new client_1.PrismaClient().kYC;
    }
    async createKYC(data, userId) {
        try {
            const findKYC = await this.kyc.findUnique({
                where: {
                    userId: userId
                }
            });
            if (findKYC)
                throw new HttpException_1.HttpException(409, `KYC already exists for user ${userId}`);
            const createKYC = await this.kyc.create({
                data: {
                    userId: userId,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    dob: data.dob,
                    address: data.address,
                    city: data.city,
                    state: data.state,
                    country: data.country,
                    postalCode: data.postalCode,
                    idFront: data.idFront,
                    idBack: data.idBack,
                    selfie: data.selfie,
                    status: client_2.kycStatus.INPROCESS,
                }
            });
            return createKYC;
        }
        catch (error) {
            console.error(error);
            throw new HttpException_1.HttpException(500, 'Cannot create kyc at the moment');
        }
    }
    async getKycStatus(userId) {
        const findKYC = await this.kyc.findUnique({
            where: {
                userId: userId
            }
        });
        if (!findKYC)
            return client_2.kycStatus.NOTSUBMITTED;
        return findKYC.status;
    }
    async updateKycStatus(userId, status) {
        const findKYC = await this.kyc.findUnique({
            where: {
                userId: userId
            }
        });
        if (!findKYC)
            throw new HttpException_1.HttpException(404, `KYC not found for user ${userId}`);
        const updateKYC = await this.kyc.update({
            where: {
                userId: userId
            },
            data: {
                status: status
            }
        });
        return updateKYC.status;
    }
    getKyc(userId) {
        return this.kyc.findUnique({
            where: {
                userId: userId
            }
        });
    }
};
KYCService = tslib_1.__decorate([
    (0, typedi_1.Service)()
], KYCService);
exports.KYCService = KYCService;
//# sourceMappingURL=kyc.service.js.map