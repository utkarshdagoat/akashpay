"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    AuthMiddleware: function() {
        return AuthMiddleware;
    },
    EnsureKYC: function() {
        return EnsureKYC;
    }
});
const _client = require("@prisma/client");
const _jsonwebtoken = require("jsonwebtoken");
const _config = require("../config");
const _HttpException = require("../exceptions/HttpException");
const getAuthorization = (req)=>{
    const cookie = req.cookies['Authorization'];
    if (cookie) return cookie;
    const header = req.header('Authorization');
    if (header) return header.split('Bearer ')[1];
    return null;
};
const AuthMiddleware = async (req, res, next)=>{
    try {
        const Authorization = getAuthorization(req);
        if (Authorization) {
            const { id } = await (0, _jsonwebtoken.verify)(Authorization, _config.SECRET_KEY);
            const users = new _client.PrismaClient().user;
            const findUser = await users.findUnique({
                where: {
                    id: Number(id)
                }
            });
            if (findUser) {
                req.user = findUser;
                next();
            } else {
                next(new _HttpException.HttpException(401, 'Wrong authentication token'));
            }
        } else {
            next(new _HttpException.HttpException(404, 'Authentication token missing'));
        }
    } catch (error) {
        next(new _HttpException.HttpException(401, 'Wrong authentication token'));
    }
};
const EnsureKYC = async (req, res, next)=>{
    const kyc = new _client.PrismaClient().kYC;
    try {
        const kycData = await kyc.findFirst({
            where: {
                userId: req.user.id
            }
        });
        if (!kycData) {
            next(new _HttpException.HttpException(401, 'User has not completed KYC'));
        } else {
            if (kycData.status != _client.kycStatus.APPROVED) {
                next(new _HttpException.HttpException(401, 'User KYC is not approved'));
            } else {
                next();
            }
        }
    } catch (error) {
        next(error);
    }
};

//# sourceMappingURL=auth.middleware.js.map