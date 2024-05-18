import { RequestWithUser } from '@/interfaces/auth.interface';
import { NextFunction, Request, Response } from 'express';
import { PrismaClient, kycStatus } from '@prisma/client';
import Stripe from 'stripe';
export class StripeController {
  public kyc = new PrismaClient().kYC;
  public transaction = new PrismaClient().transaction;
  public stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  public OnrampSessionResource = Stripe.StripeResource.extend({
    create: Stripe.StripeResource.method({
      method: 'POST',
      path: 'crypto/onramp_sessions',
    }),
  });

  public createPaymentIntent = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
    const { amount , walletAddress } = req.body;
    console.log(amount)
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
            country:'US',
          },
        });
      const AmountInCents = amount * 100;
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount: AmountInCents,
        currency: 'usd',
        description: 'Software development services',
        customer: customer.id
      });
      if(paymentIntent){
        const transaction = await this.transaction.create({
          data: {
            userId: req.user.id,
            amount: amount,
            walletAddress
          }
        })
      }
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      next(error);
    }
  }

  public createExternalAPIPaymentIntent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {userData ,amount  } = req.body;
    try {
      const customer = await this.stripe.customers.create
        ({
          name: `${userData.firstName} ${userData.lastName}`,
          address: {
            line1: userData.address,
            postal_code: userData.postalCode,
            city: userData.city,
            state: userData.state,
            country:'US',
          },
        });
      const AmountInCents = amount * 100;
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount: AmountInCents,
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