"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KYCRoutes = void 0;
const express_1 = require("express");
const validation_middleware_1 = require("@/middlewares/validation.middleware");
const kyc_controller_1 = require("@/controllers/kyc.controller");
const kyc_dto_1 = require("@/dtos/kyc.dto");
const auth_middleware_1 = require("@/middlewares/auth.middleware");
class KYCRoutes {
    constructor() {
        this.path = "/api/kyc";
        this.router = (0, express_1.Router)();
        this.dashboardController = new kyc_controller_1.KYCController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(`${this.path}/create`, (0, validation_middleware_1.ValidationMiddleware)(kyc_dto_1.CreateKYCPayload), this.dashboardController.createKYC);
        this.router.get(`${this.path}/status`, auth_middleware_1.AuthMiddleware, this.dashboardController.getKYC);
        this.router.put(`${this.path}/status`, this.dashboardController.updateKYCStatus);
    }
}
exports.KYCRoutes = KYCRoutes;
//# sourceMappingURL=kyc.route.js.map