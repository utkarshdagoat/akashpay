import { RequestWithUser } from '@/interfaces/auth.interface';
import { NextFunction, Request, Response } from 'express';
import { PrismaClient, kycStatus } from '@prisma/client';
import Stripe from 'stripe';
export class StripeController {
  public kyc = new PrismaClient().kYC;
  public stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  public OnrampSessionResource = Stripe.StripeResource.extend({
    create: Stripe.StripeResource.method({
      method: 'POST',
      path: 'crypto/onramp_sessions',
    }),
  });

  public createPaymentIntent = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
    const { amount } = req.body;
    try {
      const kyc = await this.kyc.findUnique({
        where: {
          userId: req.user.id
        }
      })
      if (kyc.status !== kycStatus.APPROVED) {
        res.status(401).send('User KYC is not approved');
        throw Error
      }
      const customer = await this.stripe.customers.create
        ({
          name: `${kyc.firstName} ${kyc.lastName}`,
          address: {
            line1: kyc.address,
            postal_code: kyc.postalCode,
            city: kyc.city,
            state: kyc.state,
            country: kyc.country,
          },
        });
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        description: 'Software development services',
        customer: customer.id
      });
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      next(error);
    }
  }
}