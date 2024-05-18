"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const typedi_1 = require("typedi");
const auth_service_1 = require("@services/auth.service");
class AuthController {
    constructor() {
        this.auth = typedi_1.Container.get(auth_service_1.AuthService);
        this.signUp = async (req, res, next) => {
            try {
                const userData = req.body;
                console.log(userData);
                const signUpUserData = await this.auth.signup(userData);
                res.status(201).json({ data: signUpUserData, message: 'signup' });
            }
            catch (error) {
                console.log(error);
                next(error);
            }
        };
        this.logIn = async (req, res, next) => {
            try {
                const userData = req.body;
                const { cookie, findUser } = await this.auth.login(userData);
                res.setHeader('Set-Cookie', [cookie]);
                res.status(200).json({ data: findUser, message: 'login' });
            }
            catch (error) {
                next(error);
            }
        };
        this.logOut = async (req, res, next) => {
            try {
                const userData = req.user;
                const logOutUserData = await this.auth.logout(userData);
                res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
                res.status(200).json({ data: logOutUserData, message: 'logout' });
            }
            catch (error) {
                next(error);
            }
        };
        this.sendOTP = async (req, res, next) => {
            try {
                const { email } = req.body;
                const sendOTP = await this.auth.sendOTP(email);
                if (sendOTP instanceof Error)
                    throw new Error('Unable to send OTP');
                res.status(200).json({ data: sendOTP.email, message: 'OTP sent' });
            }
            catch (error) {
                next(error);
            }
        };
        this.verifyOtp = async (req, res, next) => {
            try {
                const { email, otp } = req.body;
                const verifyOtp = await this.auth.verifyOTP(email, otp);
                res.status(200).json({ verified: verifyOtp, message: 'OTP verified' });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map