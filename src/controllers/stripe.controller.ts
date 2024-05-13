import { NextFunction, Request, Response } from 'express';
const Stripe = require('stripe');
export class StripeController {
  public stripe = Stripe(process.env.STRIPE_SECRET_KEY);
  public OnrampSessionResource = Stripe.StripeResource.extend({
    create: Stripe.StripeResource.method({
      method: 'POST',
      path: 'crypto/onramp_sessions',
    }),
  });
  public createSession = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { transaction_details } = req.body;
    try {

      const onrampSession = await new this.OnrampSessionResource(this.stripe).create({
        transaction_details: {
          destination_currency: transaction_details["destination_currency"],
          destination_exchange_amount: transaction_details["destination_exchange_amount"],
          destination_network: transaction_details["destination_network"],
        },
        customer_ip_address: req.socket.remoteAddress,
      });

      res.send({
        clientSecret: onrampSession.client_secret,
      });
    } catch (error) {
      next(error);
    }
  }
}