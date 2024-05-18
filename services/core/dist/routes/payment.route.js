"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRoutes = void 0;
const express_1 = require("express");
const payment_controller_1 = require("@/controllers/payment.controller");
const auth_middleware_1 = require("@/middlewares/auth.middleware");
class PaymentRoutes {
    constructor() {
        this.path = '/api/make-payment/';
        this.router = (0, express_1.Router)();
        this.payment = new payment_controller_1.PaymentController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(`${this.path}transfer-to-cosmos`, auth_middleware_1.AuthMiddleware, this.payment.ethToNoble);
        this.router.post(`${this.path}transfer-to-osmo`, auth_middleware_1.AuthMiddleware, this.payment.convertToOsmo);
    }
}
exports.PaymentRoutes = PaymentRoutes;
//# sourceMappingURL=payment.route.js.map