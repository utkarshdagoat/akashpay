"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthMiddleware", {
    enumerable: true,
    get: function() {
        return AuthMiddleware;
    }
});
const _client = require("@prisma/client");
const _jsonwebtoken = require("jsonwebtoken");
const _config = require("../config");
const _HttpException = require("../exceptions/HttpException");
const getAuthorization = (req)=>{
    const coockie = req.cookies['Authorization'];
    if (coockie) return coockie;
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

//# sourceMappingURL=auth.middleware.js.map