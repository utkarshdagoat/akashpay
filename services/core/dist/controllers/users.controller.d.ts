import { NextFunction, Request, Response } from 'express';
import { UserService } from '@services/users.service';
import { RequestWithUser } from '@/interfaces/auth.interface';
export declare class UserController {
    user: UserService;
    createUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getUser: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<void>;
}
