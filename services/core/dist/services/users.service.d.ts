import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@interfaces/users.interface';
export declare class UserService {
    user: import(".prisma/client").Prisma.UserDelegate<import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation, import("@prisma/client/runtime").DefaultArgs>;
    findAllUser(): Promise<User[]>;
    findUserById(userId: number): Promise<User>;
    createUser(userData: CreateUserDto): Promise<User>;
    updateUser(userId: number, userData: CreateUserDto): Promise<User>;
    deleteUser(): Promise<void>;
}
