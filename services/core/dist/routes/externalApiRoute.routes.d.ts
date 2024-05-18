import { Routes } from "@/interfaces/routes.interface";
import { ExternalApiController } from "@/controllers/externalApi.controller";
export declare class ExternalAPIRouter implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    externalApiController: ExternalApiController;
    constructor();
    private initializeRoutes;
}
