import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { TokenData } from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
export declare class AuthService {
    users: import(".prisma/client").Prisma.UserDelegate<import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation, import("@prisma/client/runtime").DefaultArgs>;
    otp: import(".prisma/client").Prisma.OTPDelegate<import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation, import("@prisma/client/runtime").DefaultArgs>;
    signup(userData: CreateUserDto): Promise<User>;
    login(userData: CreateUserDto): Promise<{
        cookie: string;
        findUser: User;
    }>;
    logout(userData: User): Promise<User>;
    createToken(user: User): TokenData;
    createCookie(tokenData: TokenData): string;
    sendOTP(email: string): Promise<HttpException | (import("@prisma/client/runtime").GetResult<{
        id: number;
        code: string;
        email: string;
        createdAt: Date;
    }, unknown, never> & {})>;
    sendMail(email: string, otp: string): Promise<void>;
    verifyOTP(email: string, otp: string): Promise<boolean>;
    verifyEmail(email: string): Promise<boolean>;
}
