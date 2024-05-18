import { HttpException } from "@/exceptions/HttpException";
import { HmacUtil } from "@/utils/hmacSignUtil";
import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";


function getAppIdAndSignFromHeader(req: Request): [string, string] {
    const authHeader = req.header('Authorization')
    if (!authHeader) {
        throw new HttpException(400, 'Authorization header is missing')
    }
    console.log(authHeader)
    const tokens = authHeader.split(' ')[1];
    const [appId, sign] = tokens.split(':')
    return [appId, sign]
}
function getNonceFromHeader(req: Request): string {
    const nonce = req.header('X-TXC-NONCE');
    if(!nonce) {
        throw new HttpException(400, 'Nonce header is missing')
    }
    return nonce
}
function getTimeStampFromHeader(req: Request): string {
    const timestamp = req.header('X-TXC-TIMESTAMP');
    if(!timestamp) {
        throw new HttpException(400, 'Timestamp header is missing')
    }
    return timestamp
}



export const SignVerifyMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const applications = new PrismaClient().application;
    try {
        const [appId, sign] = getAppIdAndSignFromHeader(req)
        const application = await applications.findUnique({ where: { appId } })
        if (!application) {
            next(new HttpException(400, 'Application not found'))
        }
        const { clientSecret } = application
        const nonce = getNonceFromHeader(req)
        const timestamp = getTimeStampFromHeader(req)
        const requestURI = req.protocol + '://' + req.get('host') + req.originalUrl;
        console.log(requestURI)
        const stringToSign = HmacUtil.getStringToSign(req.body,nonce,timestamp,req.method,requestURI)
        const VerifiedSign = HmacUtil.hmac256(clientSecret, stringToSign)
        console.log(VerifiedSign)
        if(sign == VerifiedSign) {
            next()
        }else{
            next(new HttpException(401, 'The Signature is invalid'))
        }
    } catch (error) {
        next(error)
    }

}