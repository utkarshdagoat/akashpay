"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthRoute", {
    enumerable: true,
    get: function() {
        return AuthRoute;
    }
});
const _express = require("express");
const _authcontroller = require("../controllers/auth.controller");
const _usersdto = require("../dtos/users.dto");
const _authmiddleware = require("../middlewares/auth.middleware");
const _validationmiddleware = require("../middlewares/validation.middleware");
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
let AuthRoute = class AuthRoute {
    initializeRoutes() {
        this.router.post(`${this.path}signup`, (0, _validationmiddleware.ValidationMiddleware)(_usersdto.CreateUserDto), this.auth.signUp);
        this.router.post(`${this.path}login`, (0, _validationmiddleware.ValidationMiddleware)(_usersdto.CreateUserDto), this.auth.logIn);
        this.router.post(`${this.path}logout`, _authmiddleware.AuthMiddleware, this.auth.logOut);
        this.router.post(`${this.path}otp/send`, this.auth.sendOTP);
        this.router.post(`${this.path}otp/verify`, this.auth.verifyOtp);
    }
    constructor(){
        _define_property(this, "path", '/api/');
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "auth", new _authcontroller.AuthController());
        this.initializeRoutes();
    }
};

//# sourceMappingURL=auth.route.js.map