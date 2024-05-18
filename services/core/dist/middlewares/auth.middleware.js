"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnsureKYC = exports.AuthMiddleware = void 0;
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = require("jsonwebtoken");
const _config_1 = require("@config");
const HttpException_1 = require("@exceptions/HttpException");
const getAuthorization = (req) => {
    const cookie = req.cookies['Authorization'];
    if (cookie)
        return cookie;
    const header = req.header('Authorization');
    if (header)
        return header.split('Bearer ')[1];
    return null;
};
const AuthMiddleware = async (req, res, next) => {
    try {
        const Authorization = getAuthorization(req);
        if (Authorization) {
            const { id } = (await (0, jsonwebtoken_1.verify)(Authorization, _config_1.SECRET_KEY));
            const users = new client_1.PrismaClient().user;
            const findUser = await users.findUnique({ where: { id: Number(id) } });
            if (findUser) {
                req.user = findUser;
                next();
            }
            else {
                next(new HttpException_1.HttpException(401, 'Wrong authentication token'));
            }
        }
        else {
            next(new HttpException_1.HttpException(404, 'Authentication token missing'));
        }
    }
    catch (error) {
        next(new HttpException_1.HttpException(401, 'Wrong authentication token'));
    }
};
exports.AuthMiddleware = AuthMiddleware;
const EnsureKYC = async (req, res, next) => {
    const kyc = new client_1.PrismaClient().kYC;
    try {
        console.log(req.user.id);
        const kycData = await kyc.findUnique({ where: { userId: req.user.id } });
        if (!kycData) {
            next(new HttpException_1.HttpException(401, 'User has not completed KYC'));
        }
        else {
            if (kycData.status != client_1.kycStatus.APPROVED) {
                next(new HttpException_1.HttpException(401, 'User KYC is not approved'));
            }
            else {
                next();
            }
        }
    }
    catch (error) {
        next(error);
    }
};
exports.EnsureKYC = EnsureKYC;
//# sourceMappingURL=auth.middleware.js.map