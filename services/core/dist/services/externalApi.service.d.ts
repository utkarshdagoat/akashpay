import { Session } from "@prisma/client";
import { SessionDto } from "@/dtos/session.dto";
import { TokenData } from "@/interfaces/auth.interface";
export declare class ExternalApiService {
    session: import(".prisma/client").Prisma.SessionDelegate<import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation, import("@prisma/client/runtime").DefaultArgs>;
    createToken(session: Session): TokenData;
    creatSession(data: SessionDto): Promise<(TokenData | (import("@prisma/client/runtime").GetResult<{
        id: number;
        sid: string;
        email: string;
        amount: number;
        walletAddress: string;
        createdAt: Date;
    }, unknown, never> & {}))[]>;
    getSession(email: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        sid: string;
        email: string;
        amount: number;
        walletAddress: string;
        createdAt: Date;
    }, unknown, never> & {}>;
    getSessionToken(token: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        sid: string;
        email: string;
        amount: number;
        walletAddress: string;
        createdAt: Date;
    }, unknown, never> & {}>;
}
