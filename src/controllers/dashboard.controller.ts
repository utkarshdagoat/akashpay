import { NextFunction, Response } from 'express';
import { Container } from 'typedi';
import { DashboardService } from '@/services/dashboard.service';
import { RequestWithUser } from '@/interfaces/auth.interface';
import { application } from '@prisma/client';

export class DashboardController {
    public dashboard = Container.get(DashboardService);

    public getApplications = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user.id;
            const applications :application[] = await this.dashboard.getApplications(userId);

            res.status(200).json({ data: applications });
        } catch (error) {
            next(error);
        }
    }

    public createApplication = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user.id;
            const application = req.body;
            const newApplicationData  = await this.dashboard.createApplication(application , userId);

            res.status(201).json({ data: newApplicationData });
        } catch (error) {
            next(error);
        }
    }

    public updateApplication = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => { 
        try {
            const application = req.body;
            const id = Number(req.params.id);
            const updateApplicationData = await this.dashboard.updateApplication(application , id);
            res.status(200).json({ data: updateApplicationData });
        } catch (error) {
            next(error);
        }
    }
    public deleteApplication = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
        try {
            const id = req.body.id;
            const deleteApplicationData = await this.dashboard.deleteApplication(id);
            res.status(200).json({ data: deleteApplicationData });
        } catch (error) {
            next(error);
        }
    }
}
