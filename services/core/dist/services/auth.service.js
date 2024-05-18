"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const tslib_1 = require("tslib");
const client_1 = require("@prisma/client");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const typedi_1 = require("typedi");
const _config_1 = require("@config");
const HttpException_1 = require("@exceptions/HttpException");
const nodemailer_1 = tslib_1.__importDefault(require("nodemailer"));
const mail_1 = require("@/config/mail");
const randomstring_1 = tslib_1.__importDefault(require("randomstring"));
function generateOTP() {
    return randomstring_1.default.generate({
        length: 6,
        charset: 'numeric'
    });
}
let AuthService = class AuthService {
    constructor() {
        this.users = new client_1.PrismaClient().user;
        this.otp = new client_1.PrismaClient().oTP;
    }
    async signup(userData) {
        const findUser = await this.users.findUnique({ where: { email: userData.email } });
        if (findUser)
            throw new HttpException_1.HttpException(409, `This email ${userData.email} already exists`);
        const hashedPassword = await (0, bcrypt_1.hash)(userData.password, 10);
        const createUserData = this.users.create({ data: Object.assign(Object.assign({}, userData), { password: hashedPassword }) });
        return createUserData;
    }
    async login(userData) {
        const findUser = await this.users.findUnique({ where: { email: userData.email } });
        if (!findUser)
            throw new HttpException_1.HttpException(409, `This email ${userData.email} was not found`);
        const isPasswordMatching = await (0, bcrypt_1.compare)(userData.password, findUser.password);
        if (!isPasswordMatching)
            throw new HttpException_1.HttpException(409, "Password is not matching");
        const tokenData = this.createToken(findUser);
        const cookie = this.createCookie(tokenData);
        return { cookie, findUser };
    }
    async logout(userData) {
        const findUser = await this.users.findFirst({ where: { email: userData.email, password: userData.password } });
        if (!findUser)
            throw new HttpException_1.HttpException(409, "User doesn't exist");
        return findUser;
    }
    createToken(user) {
        const dataStoredInToken = { id: user.id };
        const secretKey = _config_1.SECRET_KEY;
        const expiresIn = 24 * 60 * 60 * 1000;
        return { expiresIn, token: (0, jsonwebtoken_1.sign)(dataStoredInToken, secretKey, { expiresIn }) };
    }
    createCookie(tokenData) {
        return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
    }
    async sendOTP(email) {
        try {
            const OTP = generateOTP();
            const createOtp = await this.otp.create({ data: { email, code: OTP } });
            await this.sendMail(email, OTP);
            return createOtp;
        }
        catch (error) {
            return new HttpException_1.HttpException(500, 'Unable to send OTP');
        }
    }
    async sendMail(email, otp) {
        try {
            const options = {
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT),
                auth: {
                    user: process.env.SMTP_MAIL,
                    pass: process.env.SMTP_APP_PASS,
                },
            };
            const transporter = await nodemailer_1.default.createTransport(options);
            const mailOptions = {
                from: process.env.SMPT_MAIL,
                to: email,
                subject: mail_1.MAIL_SUBJECT,
                html: (0, mail_1.MAIL_BODY)(otp),
            };
            const res = await transporter.sendMail(mailOptions);
        }
        catch (error) {
            console.log(error);
            throw new HttpException_1.HttpException(500, 'Unable to send email');
        }
    }
    async verifyOTP(email, otp) {
        const findOtp = await this.otp.findFirst({ where: { email, code: otp } });
        if (!findOtp) {
            throw new HttpException_1.HttpException(403, 'Invalid OTP');
        }
        const deleteOtp = await this.otp.delete({ where: { id: findOtp.id } });
        return true;
    }
    async verifyEmail(email) {
        try {
            const findUser = await this.users.findUnique({ where: { email } });
            const updateUser = await this.users.update({ where: { id: findUser.id }, data: { emailVerified: true } });
            if (!findUser) {
                throw new HttpException_1.HttpException(404, 'User not found');
            }
            if (!updateUser) {
                throw new HttpException_1.HttpException(500, 'Unable to change user email status');
            }
            return true;
        }
        catch (error) {
            console.error(error);
            throw new HttpException_1.HttpException(500, 'Unable to verify email');
        }
    }
};
AuthService = tslib_1.__decorate([
    (0, typedi_1.Service)()
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map