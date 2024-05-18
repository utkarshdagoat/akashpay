import { NextFunction, Response } from 'express';
import { RequestWithUser } from '@/interfaces/auth.interface';
export declare class PaymentController {
    transaction: import(".prisma/client").Prisma.TransactionDelegate<import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation, import("@prisma/client/runtime").DefaultArgs>;
    constructor();
    ethToNoble(req: RequestWithUser, res: Response, next: NextFunction): Promise<void>;
    convertToOsmo(req: RequestWithUser, res: Response, next: NextFunction): Promise<void>;
}
