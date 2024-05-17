"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "KYCRoutes", {
    enumerable: true,
    get: function() {
        return KYCRoutes;
    }
});
const _express = require("express");
const _validationmiddleware = require("../middlewares/validation.middleware");
const _kyccontroller = require("../controllers/kyc.controller");
const _kycdto = require("../dtos/kyc.dto");
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
let KYCRoutes = class KYCRoutes {
    initializeRoutes() {
        this.router.post(`${this.path}/create`, (0, _validationmiddleware.ValidationMiddleware)(_kycdto.CreateKYCDto), this.dashboardController.createKYC);
        this.router.get(`${this.path}/status`, this.dashboardController.getKYC);
        this.router.put(`${this.path}/status`, this.dashboardController.updateKYCStatus);
    }
    constructor(){
        _define_property(this, "path", "/api/kyc");
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "dashboardController", new _kyccontroller.KYCController());
        this.initializeRoutes();
    }
};

//# sourceMappingURL=kyc.route.js.map