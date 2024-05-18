"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignVerifyMiddleware = void 0;
const HttpException_1 = require("@/exceptions/HttpException");
const hmacSignUtil_1 = require("@/utils/hmacSignUtil");
const client_1 = require("@prisma/client");
function getAppIdAndSignFromHeader(req) {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        throw new HttpException_1.HttpException(400, 'Authorization header is missing');
    }
    console.log(authHeader);
    const tokens = authHeader.split(' ')[1];
    const [appId, sign] = tokens.split(':');
    return [appId, sign];
}
function getNonceFromHeader(req) {
    const nonce = req.header('X-TXC-NONCE');
    if (!nonce) {
        throw new HttpException_1.HttpException(400, 'Nonce header is missing');
    }
    return nonce;
}
function getTimeStampFromHeader(req) {
    const timestamp = req.header('X-TXC-TIMESTAMP');
    if (!timestamp) {
        throw new HttpException_1.HttpException(400, 'Timestamp header is missing');
    }
    return timestamp;
}
const SignVerifyMiddleware = async (req, res, next) => {
    const applications = new client_1.PrismaClient().application;
    try {
        const [appId, sign] = getAppIdAndSignFromHeader(req);
        const application = await applications.findUnique({ where: { appId } });
        if (!application) {
            next(new HttpException_1.HttpException(400, 'Application not found'));
        }
        const { clientSecret } = application;
        const nonce = getNonceFromHeader(req);
        const timestamp = getTimeStampFromHeader(req);
        const requestURI = req.protocol + '://' + req.get('host') + req.originalUrl;
        console.log(requestURI);
        const stringToSign = hmacSignUtil_1.HmacUtil.getStringToSign(req.body, nonce, timestamp, req.method, requestURI);
        const VerifiedSign = hmacSignUtil_1.HmacUtil.hmac256(clientSecret, stringToSign);
        console.log(VerifiedSign);
        if (sign == VerifiedSign) {
            next();
        }
        else {
            next(new HttpException_1.HttpException(401, 'The Signature is invalid'));
        }
    }
    catch (error) {
        next(error);
    }
};
exports.SignVerifyMiddleware = SignVerifyMiddleware;
//# sourceMappingURL=signverify.middleware.js.map