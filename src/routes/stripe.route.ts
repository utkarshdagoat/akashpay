import { Router } from 'express';
import { StripeController } from '@/controllers/stripe.controller';
import { Routes } from '@interfaces/routes.interface';
import { AuthMiddleware, EnsureKYC } from '@middlewares/auth.middleware';

export class StripeRoutes implements Routes {
  public path = '/api/stripe/';
  public router = Router();
  public stripe = new StripeController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}create-payment-intent`, AuthMiddleware , EnsureKYC ,this.stripe.createPaymentIntent);
  }
}
/*
{
    "transaction_details": {
        "destination_currency": "usdc",
        "destination_exchange_amount": "13.37",
        "destination_network": "ethereum"
    }
}
*/

