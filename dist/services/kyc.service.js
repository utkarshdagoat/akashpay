"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "KYCService", {
    enumerable: true,
    get: function() {
        return KYCService;
    }
});
const _typedi = require("typedi");
const _client = require("@prisma/client");
const _HttpException = require("../exceptions/HttpException");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let KYCService = class KYCService {
    async createKYC(data, userId) {
        try {
            const findKYC = await this.kyc.findUnique({
                where: {
                    userId: userId
                }
            });
            if (findKYC) throw new _HttpException.HttpException(409, `KYC already exists for user ${userId}`);
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
                    status: _client.kycStatus.INPROCESS
                }
            });
            return createKYC;
        } catch (error) {
            console.error(error);
            throw new _HttpException.HttpException(500, 'Cannot create kyc at the moment');
        }
    }
    async getKycStatus(userId) {
        try {
            const findKYC = await this.kyc.findUnique({
                where: {
                    userId: userId
                }
            });
            if (!findKYC) throw new _HttpException.HttpException(404, `KYC not found for user ${userId}`);
            return findKYC.status;
        } catch (error) {
            console.error(error);
            throw new _HttpException.HttpException(500, 'Cannot get kyc status at the moment');
        }
    }
    async updateKycStatus(userId, status) {
        try {
            const findKYC = await this.kyc.findUnique({
                where: {
                    userId: userId
                }
            });
            if (!findKYC) throw new _HttpException.HttpException(404, `KYC not found for user ${userId}`);
            const updateKYC = await this.kyc.update({
                where: {
                    userId: userId
                },
                data: {
                    status: status
                }
            });
            return updateKYC.status;
        } catch (error) {
            console.error(error);
            throw new _HttpException.HttpException(500, 'Cannot update kyc status at the moment');
        }
    }
    getKyc(userId) {
        return this.kyc.findUnique({
            where: {
                userId: userId
            }
        });
    }
    constructor(){
        _define_property(this, "kyc", new _client.PrismaClient().kYC);
    }
};
KYCService = _ts_decorate([
    (0, _typedi.Service)()
], KYCService);

//# sourceMappingURL=kyc.service.js.map