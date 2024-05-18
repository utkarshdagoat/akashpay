"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenSessionMiddleWare = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const HttpException_1 = require("@/exceptions/HttpException");
const client_1 = require("@prisma/client");
function getTimeStampFromHeader(req) {
    const timestamp = req.header('X-TXC-TIMESTAMP');
    if (!timestamp) {
        throw new HttpException_1.HttpException(400, 'Timestamp header is missing');
    }
    return timestamp;
}
const TokenSessionMiddleWare = async (req, res, next) => {
    const session = new client_1.PrismaClient().session;
    const token = req.header('Access-Token').split(' ')[1];
    if (!token)
        next(new HttpException_1.HttpException(401, 'Access Token is missing'));
    try {
        const timestamp = getTimeStampFromHeader(req);
        if (!timestamp)
            next(new HttpException_1.HttpException(400, 'Timestamp header is missing'));
        const secretKey = process.env.SECRET_KEY;
        const verificationResponse = (0, jsonwebtoken_1.verify)(token, secretKey);
        const foundSession = await session.findUnique({
            where: {
                id: verificationResponse.id
            }
        });
        if (!foundSession)
            next(new HttpException_1.HttpException(404, 'Session not found-- Unauthorized'));
        console.log();
        if (Number(timestamp) / 1000 > (foundSession.createdAt.getTime() / 1000) + 300)
            next(new HttpException_1.HttpException(401, 'Session Expired timestamp'));
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.TokenSessionMiddleWare = TokenSessionMiddleWare;
//# sourceMappingURL=token.middleware.js.map