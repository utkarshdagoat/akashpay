import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { PaymentController } from '@/controllers/payment.controller';

export class PaymentRoutes implements Routes {
  public path = '/api/make-payment/';
  public router = Router();
  public payment = new PaymentController()
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, this.payment.makePayment);
  }
}
