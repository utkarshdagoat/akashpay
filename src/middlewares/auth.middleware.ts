import { PrismaClient, kycStatus } from '@prisma/client';
import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '@config';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, RequestWithUser } from '@interfaces/auth.interface';

const getAuthorization = (req) => {
  const cookie = req.cookies['Authorization'];
  if (cookie) return cookie;

  const header = req.header('Authorization');
  if (header) return header.split('Bearer ')[1];

  return null;
}

export const AuthMiddleware = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  try {
    const Authorization = getAuthorization(req);

    if (Authorization) {
      const { id } = (await verify(Authorization, SECRET_KEY)) as DataStoredInToken;
      const users = new PrismaClient().user;
      const findUser = await users.findUnique({ where: { id: Number(id) } });

      if (findUser) {
        req.user = findUser;
        next();
      } else {
        next(new HttpException(401, 'Wrong authentication token'));
      }
    } else {
      next(new HttpException(404, 'Authentication token missing'));
    }
  } catch (error) {
    next(new HttpException(401, 'Wrong authentication token'));
  }
};

export const EnsureKYC = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  const kyc = new PrismaClient().kYC;
  try {
    console.log(req.user.id)
    const kycData = await kyc.findUnique({ where: { userId: req.user.id } });
    if(!kycData) {
      next(new HttpException(401, 'User has not completed KYC'));
    }else{
      if(kycData.status != kycStatus.APPROVED){
        next(new HttpException(401, 'User KYC is not approved'));
      }else{
        next();
      }
    }
  } catch (error) {
    next(error) 
  }
}
