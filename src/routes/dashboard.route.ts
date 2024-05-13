import { Router } from "express";
import { DashboardController } from "@/controllers/dashboard.controller";
import { AuthMiddleware } from "@/middlewares/auth.middleware";
import { CreateAndUpdateApplicationDto } from "@/dtos/dashboard.dto";
import { ValidationMiddleware } from "@/middlewares/validation.middleware";
import { Routes } from "@/interfaces/routes.interface";

export class DashBoardRoutes implements Routes {
    public path = "/api/dashboard/";
    public router = Router();
    public dashboardController = new DashboardController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.all(`${this.path}/*`, AuthMiddleware);
        this.router.get(`${this.path}/applications`, this.dashboardController.getApplications);
        this.router.post(`${this.path}/applications`, ValidationMiddleware(CreateAndUpdateApplicationDto), this.dashboardController.createApplication);
        this.router.put(`${this.path}/applications/:id`, ValidationMiddleware(CreateAndUpdateApplicationDto, true), this.dashboardController.updateApplication);
        this.router.delete(`${this.path}/applications`, this.dashboardController.deleteApplication);
    }
}