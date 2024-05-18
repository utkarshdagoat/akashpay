import { StripeController } from '@/controllers/stripe.controller';
import { Routes } from '@interfaces/routes.interface';
export declare class StripeRoutes implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    stripe: StripeController;
    constructor();
    private initializeRoutes;
}
