import { Router } from "express";
import { ValidationMiddleware } from "@/middlewares/validation.middleware";
import { Routes } from "@/interfaces/routes.interface";
import { KYCController } from "@/controllers/kyc.controller";
import { CreateKYCDto } from "@/dtos/kyc.dto";

export class KYCRoutes implements Routes {
    public path = "/api/kyc";
    public router = Router();
    public dashboardController = new KYCController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`${this.path}/create`, ValidationMiddleware(CreateKYCDto), this.dashboardController.createKYC);
        this.router.get(`${this.path}/status`, this.dashboardController.getKYC);
        this.router.put(`${this.path}/status`, this.dashboardController.updateKYCStatus);
    }
    
}