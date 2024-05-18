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
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/create-session`, SignVerifyMiddleware, this.externalApiController.createSession);
    this.router.post(`${this.path}/transfer-to-cosmos`, TokenSessionMiddleWare ,SignVerifyMiddleware ,this.externalApiController.ethToNoble);
    this.router.post(`${this.path}/transfer-to-osmo`, TokenSessionMiddleWare,SignVerifyMiddleware, this.externalApiController.convertToOsmo);
    this.router.get(`${this.path}/get-data`, TokenSessionMiddleWare, this.externalApiController.getDataFromToken);
  }
}