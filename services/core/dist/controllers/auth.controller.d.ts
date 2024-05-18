import { NextFunction, Request, Response } from 'express';
import { RequestWithUser } from '@interfaces/auth.interface';
import { AuthService } from '@services/auth.service';
export declare class AuthController {
    auth: AuthService;
    signUp: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    logIn: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    logOut: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<void>;
    sendOTP: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    verifyOtp: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
