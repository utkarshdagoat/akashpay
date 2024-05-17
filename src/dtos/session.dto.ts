import { IsEmail } from "class-validator";

export class SessionDto {
    @IsEmail()
    email: string;
}