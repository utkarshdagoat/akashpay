import { NextFunction, Response } from 'express';
import { DashboardService } from '@/services/dashboard.service';
import { RequestWithUser } from '@/interfaces/auth.interface';
export declare class DashboardController {
    dashboard: DashboardService;
    getApplications: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<void>;
    createApplication: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<void>;
    updateApplication: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<void>;
    deleteApplication: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<void>;
}
