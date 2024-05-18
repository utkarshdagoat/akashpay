import { DashboardController } from "@/controllers/dashboard.controller";
import { Routes } from "@/interfaces/routes.interface";
export declare class DashBoardRoutes implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    dashboardController: DashboardController;
    constructor();
    private initializeRoutes;
}
