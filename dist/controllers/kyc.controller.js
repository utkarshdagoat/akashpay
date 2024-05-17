"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "KYCController", {
    enumerable: true,
    get: function() {
        return KYCController;
    }
});
const _kycservice = require("../services/kyc.service");
const _typedi = _interop_require_default(require("typedi"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let KYCController = class KYCController {
    constructor(){
        _define_property(this, "kyc", _typedi.default.get(_kycservice.KYCService));
        _define_property(this, "createKYC", async (req, res, next)=>{
            try {
                const userId = req.body.userId;
                const kycData = req.body.data;
                const createKYC = await this.kyc.createKYC(kycData, userId);
                res.status(201).json({
                    data: createKYC,
                    message: 'KYC created'
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "updateKYCStatus", async (req, res, next)=>{
            try {
                const userId = req.user.id;
                const { status } = req.body;
                const updateStatus = await this.kyc.updateKycStatus(userId, status);
                res.status(200).json({
                    data: updateStatus,
                    message: 'KYC status updated'
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "getKYC", async (req, res, next)=>{
            try {
                const userId = req.user.id;
                const kycStatus = await this.kyc.getKycStatus(userId);
                res.status(200).json({
                    data: kycStatus,
                    message: 'KYC status retrieved'
                });
            } catch (error) {
                next(error);
            }
        });
    }
};

//# sourceMappingURL=kyc.controller.js.map