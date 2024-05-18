import { NextFunction, Response } from 'express';
import { RequestWithUser } from '@interfaces/auth.interface';
export declare const AuthMiddleware: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<void>;
export declare const EnsureKYC: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<void>;
