"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeRoutes = void 0;
const express_1 = require("express");
const stripe_controller_1 = require("@/controllers/stripe.controller");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const token_middleware_1 = require("@/middlewares/token.middleware");
class StripeRoutes {
    constructor() {
        this.path = '/api/stripe/';
        this.router = (0, express_1.Router)();
        this.stripe = new stripe_controller_1.StripeController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(`${this.path}create-payment-intent`, auth_middleware_1.AuthMiddleware, auth_middleware_1.EnsureKYC, this.stripe.createPaymentIntent);
        this.router.post(`${this.path}external/create-payment-intent`, token_middleware_1.TokenSessionMiddleWare, this.stripe.createExternalAPIPaymentIntent);
    }
}
exports.StripeRoutes = StripeRoutes;
/*
{
    "transaction_details": {
        "destination_currency": "usdc",
        "destination_exchange_amount": "13.37",
        "destination_network": "ethereum"
    }
}
*/
//# sourceMappingURL=stripe.route.js.map