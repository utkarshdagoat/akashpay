"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ExternalAPIRouter", {
    enumerable: true,
    get: function() {
        return ExternalAPIRouter;
    }
});
const _express = require("express");
const _externalApicontroller = require("../controllers/externalApi.controller");
const _paymentcontroller = require("../controllers/payment.controller");
const _signverifymiddleware = require("../middlewares/signverify.middleware");
const _tokenmiddleware = require("../middlewares/token.middleware");
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
let ExternalAPIRouter = class ExternalAPIRouter {
    initializeRoutes() {
        this.router.post(`${this.path}/create-session`, _signverifymiddleware.SignVerifyMiddleware, this.externalApiController.createSession);
        this.router.post(`${this.path}/eth-to-noble`, _signverifymiddleware.SignVerifyMiddleware, _tokenmiddleware.TokenSessionMiddleWare, this.paymentController.ethToNoble);
        this.router.post(`${this.path}/convert-to-osmo`, _signverifymiddleware.SignVerifyMiddleware, _tokenmiddleware.TokenSessionMiddleWare, this.paymentController.convertToOsmo);
    }
    constructor(){
        _define_property(this, "path", '/api/external');
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "externalApiController", new _externalApicontroller.ExternalApiController());
        _define_property(this, "paymentController", new _paymentcontroller.PaymentController());
        this.initializeRoutes();
    }
};

//# sourceMappingURL=externalApiRoute.routes.js.map