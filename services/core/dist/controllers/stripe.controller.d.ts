import { RequestWithUser } from '@/interfaces/auth.interface';
import { NextFunction, Request, Response } from 'express';
import Stripe from 'stripe';
export declare class StripeController {
    kyc: import(".prisma/client").Prisma.KYCDelegate<import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation, import("@prisma/client/runtime").DefaultArgs>;
    transaction: import(".prisma/client").Prisma.TransactionDelegate<import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation, import("@prisma/client/runtime").DefaultArgs>;
    stripe: Stripe;
    OnrampSessionResource: Stripe.StripeResourceExtension<{
        create: (...args: any[]) => Stripe.Response<object>;
    }>;
    createPaymentIntent: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<void>;
    createExternalAPIPaymentIntent: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
