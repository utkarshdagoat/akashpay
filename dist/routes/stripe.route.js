"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "StripeRoutes", {
    enumerable: true,
    get: function() {
        return StripeRoutes;
    }
});
const _express = require("express");
const _stripecontroller = require("../controllers/stripe.controller");
const _authmiddleware = require("../middlewares/auth.middleware");
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
let StripeRoutes = class StripeRoutes {
    initializeRoutes() {
        this.router.post(`${this.path}create-session`, _authmiddleware.AuthMiddleware, this.stripe.createSession);
    }
    constructor(){
        _define_property(this, "path", '/api/stripe/');
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "stripe", new _stripecontroller.StripeController());
        this.initializeRoutes();
    }
};

//# sourceMappingURL=stripe.route.js.map