import { Routes } from "@/interfaces/routes.interface";
import { Router } from "express";
import { ExternalApiController } from "@/controllers/externalApi.controller";
import { PaymentController } from "@/controllers/payment.controller";
import { SignVerifyMiddleware } from "@/middlewares/signverify.middleware";
import { TokenSessionMiddleWare } from "@/middlewares/token.middleware";

export class ExternalAPIRouter implements Routes {
  public path = '/api/external';
  public router = Router();
  public externalApiController = new ExternalApiController();
  public paymentController = new PaymentController();
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/create-session`, SignVerifyMiddleware, this.externalApiController.createSession);
    this.router.post(`${this.path}/eth-to-noble`, SignVerifyMiddleware,TokenSessionMiddleWare  ,this.paymentController.ethToNoble);
    this.router.post(`${this.path}/convert-to-osmo`, SignVerifyMiddleware,TokenSessionMiddleWare, this.paymentController.convertToOsmo);
  }
}