import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { HttpException } from "@/exceptions/HttpException";
import { DataStoredInToken } from "@/interfaces/auth.interface";
import { PrismaClient } from "@prisma/client";


function getTimeStampFromHeader(req: Request) {
    const timestamp = req.header('X-TXC-TIMESTAMP');
    if (!timestamp) {
        throw new HttpException(400, 'Timestamp header is missing')
    }
    return timestamp

}



export const TokenSessionMiddleWare = async (req: Request, res: Response, next: NextFunction) => {
    const session = new PrismaClient().session
    const token = req.header('Access-Token');
    if (!token) next(new HttpException(401, 'Access Token is missing'));
    else {
        const tokenData = token.split(' ')[1];
        try {
            const timestamp = getTimeStampFromHeader(req);
            if (!timestamp) next(new HttpException(400, 'Timestamp header is missing'))
            const secretKey: string = process.env.SECRET_KEY;
            const verificationResponse = verify(tokenData, secretKey) as DataStoredInToken;
            const foundSession = await session.findUnique({
                where: {
                    id: verificationResponse.id
                }
            })
            if (!foundSession) next(new HttpException(404, 'Session not found-- Unauthorized'))
            console.log()
            if (Number(timestamp) / 1000 > (foundSession.createdAt.getTime() / 1000) + 300) next(new HttpException(401, 'Session Expired timestamp'))
            next()
        }
        catch (error) {
            next(error)
        }
    }
}