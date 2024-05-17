"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthController", {
    enumerable: true,
    get: function() {
        return AuthController;
    }
});
const _typedi = require("typedi");
const _authservice = require("../services/auth.service");
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
let AuthController = class AuthController {
    constructor(){
        _define_property(this, "auth", _typedi.Container.get(_authservice.AuthService));
        _define_property(this, "signUp", async (req, res, next)=>{
            try {
                const userData = req.body;
                console.log(userData);
                const signUpUserData = await this.auth.signup(userData);
                res.status(201).json({
                    data: signUpUserData,
                    message: 'signup'
                });
            } catch (error) {
                console.log(error);
                next(error);
            }
        });
        _define_property(this, "logIn", async (req, res, next)=>{
            try {
                const userData = req.body;
                const { cookie, findUser } = await this.auth.login(userData);
                res.setHeader('Set-Cookie', [
                    cookie
                ]);
                res.status(200).json({
                    data: findUser,
                    message: 'login'
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "logOut", async (req, res, next)=>{
            try {
                const userData = req.user;
                const logOutUserData = await this.auth.logout(userData);
                res.setHeader('Set-Cookie', [
                    'Authorization=; Max-age=0'
                ]);
                res.status(200).json({
                    data: logOutUserData,
                    message: 'logout'
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "sendOTP", async (req, res, next)=>{
            try {
                const { email } = req.body;
                const sendOTP = await this.auth.sendOTP(email);
                if (sendOTP instanceof Error) throw new Error('Unable to send OTP');
                res.status(200).json({
                    data: sendOTP.email,
                    message: 'OTP sent'
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "verifyOtp", async (req, res, next)=>{
            try {
                const { email, otp } = req.body;
                const verifyOtp = await this.auth.verifyOTP(email, otp);
                res.status(200).json({
                    verified: verifyOtp,
                    message: 'OTP verified'
                });
            } catch (error) {
                next(error);
            }
        });
    }
};

//# sourceMappingURL=auth.controller.js.map