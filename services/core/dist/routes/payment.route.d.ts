import { Routes } from '@interfaces/routes.interface';
import { PaymentController } from '@/controllers/payment.controller';
export declare class PaymentRoutes implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    payment: PaymentController;
    constructor();
    private initializeRoutes;
}
