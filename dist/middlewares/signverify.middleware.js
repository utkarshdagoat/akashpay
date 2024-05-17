"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SignVerifyMiddleware", {
    enumerable: true,
    get: function() {
        return SignVerifyMiddleware;
    }
});
const _HttpException = require("../exceptions/HttpException");
const _hmacSignUtil = require("../utils/hmacSignUtil");
const _client = require("@prisma/client");
function getAppIdAndSignFromHeader(req) {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        throw new _HttpException.HttpException(400, 'Authorization header is missing');
    }
    const tokens = authHeader.split(' ')[1];
    const [appId, sign] = tokens.split(':');
    return [
        appId,
        sign
    ];
}
function getNonceFromHeader(req) {
    const nonce = req.header('X-TXC-NONCE');
    if (!nonce) {
        throw new _HttpException.HttpException(400, 'Nonce header is missing');
    }
    return nonce;
}
function getTimeStampFromHeader(req) {
    const timestamp = req.header('X-TXC-TIMESTAMP');
    if (!timestamp) {
        throw new _HttpException.HttpException(400, 'Timestamp header is missing');
    }
    return timestamp;
}
const SignVerifyMiddleware = async (req, res, next)=>{
    const applications = new _client.PrismaClient().application;
    try {
        const [appId, sign] = getAppIdAndSignFromHeader(req);
        const application = await applications.findUnique({
            where: {
                appId
            }
        });
        if (!application) {
            next(new _HttpException.HttpException(400, 'Application not found'));
        }
        const { clientSecret } = application;
        const nonce = getNonceFromHeader(req);
        const timestamp = getTimeStampFromHeader(req);
        const requestURI = req.protocol + '://' + req.get('host') + req.originalUrl;
        const stringToSign = _hmacSignUtil.HmacUtil.getStringToSign(req.body, nonce, timestamp, req.method, requestURI);
        const VerifiedSign = _hmacSignUtil.HmacUtil.hmac256(clientSecret, stringToSign);
        if (sign == VerifiedSign) {
            next();
        } else {
            next(new _HttpException.HttpException(401, 'The Signature is invalid'));
        }
    } catch (error) {
        next(error);
    }
};

//# sourceMappingURL=signverify.middleware.js.map