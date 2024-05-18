"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalAPIRouter = void 0;
const express_1 = require("express");
const externalApi_controller_1 = require("@/controllers/externalApi.controller");
const signverify_middleware_1 = require("@/middlewares/signverify.middleware");
const token_middleware_1 = require("@/middlewares/token.middleware");
class ExternalAPIRouter {
    constructor() {
        this.path = '/api/external';
        this.router = (0, express_1.Router)();
        this.externalApiController = new externalApi_controller_1.ExternalApiController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(`${this.path}/create-session`, signverify_middleware_1.SignVerifyMiddleware, this.externalApiController.createSession);
        this.router.post(`${this.path}/transfer-to-cosmos`, token_middleware_1.TokenSessionMiddleWare, this.externalApiController.ethToNoble);
        this.router.post(`${this.path}/transfer-to-osmo`, token_middleware_1.TokenSessionMiddleWare, this.externalApiController.convertToOsmo);
        this.router.post(`${this.path}/get-data`, token_middleware_1.TokenSessionMiddleWare, this.externalApiController.getDataFromToken);
    }
}
exports.ExternalAPIRouter = ExternalAPIRouter;
//# sourceMappingURL=externalApiRoute.routes.js.map