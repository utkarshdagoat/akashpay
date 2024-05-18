"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = void 0;
const express_1 = require("express");
const auth_controller_1 = require("@controllers/auth.controller");
const users_dto_1 = require("@dtos/users.dto");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const validation_middleware_1 = require("@middlewares/validation.middleware");
class AuthRoute {
    constructor() {
        this.path = '/api/';
        this.router = (0, express_1.Router)();
        this.auth = new auth_controller_1.AuthController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(`${this.path}signup`, (0, validation_middleware_1.ValidationMiddleware)(users_dto_1.CreateUserDto), this.auth.signUp);
        this.router.post(`${this.path}login`, (0, validation_middleware_1.ValidationMiddleware)(users_dto_1.CreateUserDto), this.auth.logIn);
        this.router.post(`${this.path}logout`, auth_middleware_1.AuthMiddleware, this.auth.logOut);
        this.router.post(`${this.path}otp/send`, this.auth.sendOTP);
        this.router.post(`${this.path}otp/verify`, this.auth.verifyOtp);
    }
}
exports.AuthRoute = AuthRoute;
//# sourceMappingURL=auth.route.js.map