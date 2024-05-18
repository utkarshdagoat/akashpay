import { Routes } from "@/interfaces/routes.interface";
import { KYCController } from "@/controllers/kyc.controller";
export declare class KYCRoutes implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    dashboardController: KYCController;
    constructor();
    private initializeRoutes;
}
