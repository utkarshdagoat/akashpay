import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { HttpException } from "@/exceptions/HttpException";
import { DataStoredInToken } from "@/interfaces/auth.interface";
import { PrismaClient } from "@prisma/client";


function getTimeStampFromHeader(req: Request) {
    const timestamp = Date.parse(req.header('X-TXC-TIMESTAMP'));
    if (!timestamp) {
        throw new HttpException(400, 'Timestamp header is missing')
    }
    return timestamp

}



export const TokenSessionMiddleWare = async (req: Request, res: Response, next: NextFunction) => {
    const session = new PrismaClient().session
    const token = req.header('Access-Token').split(' ')[1];
    if (!token) next(new HttpException(401, 'Access Token is missing'));
    try {
        const timestamp = getTimeStampFromHeader(req);
        if(!timestamp) next(new HttpException(400, 'Timestamp header is missing'))
        const secretKey: string = process.env.SECRET_KEY;
        const verificationResponse = verify(token, secretKey) as DataStoredInToken;
        const foundSession = await session.findUnique({
            where: {
                id: verificationResponse.id
            }
        })
        if(!foundSession) next(new HttpException(404, 'Session not found-- Unauthorized'))
        if(timestamp > foundSession.createdAt.getTime()/10000 + 300) next(new HttpException(401, 'Session Expired'))
        next()
    } catch (error) {
        next(error)
    }
}