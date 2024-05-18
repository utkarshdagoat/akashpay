import { Service } from "typedi";
import { PrismaClient, Session } from "@prisma/client";
import { HttpException } from "@/exceptions/HttpException";
import { SessionDto } from "@/dtos/session.dto";
import { TokenData , DataStoredInToken } from "@/interfaces/auth.interface";
import { sign, verify } from "jsonwebtoken";

@Service()
export class ExternalApiService {
    public session = new PrismaClient().session;

    public createToken(session: Session): TokenData {
        const dataStoredInToken: DataStoredInToken = { id: session.id };

        const secretKey: string = process.env.SECRET_KEY;
        const expiresIn: number = 5 * 60 * 1000;
    
        return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
      }
    public async creatSession(data: SessionDto){
        
        const getSession = await this.session.findUnique({
            where:{
                email:data.email
            }
        })
        if(getSession) {
            const deletSession = await this.session.delete({
                where: {
                    email:data.email
                }
            })
        };
        const newSession = await this.session.create({
            data: {
                email:data.email,
                walletAddress: data.walletAddress,
                amount: data.amount
            }
        })
        const token = this.createToken(
            newSession
        )
        return [token , newSession];
    }
    public async getSession(email: string){
        const getSession = await this.session.findUnique({
            where: {
                email
            }
        })
        if(!getSession) throw new HttpException(404, 'Session not found Please Create One first')
        return getSession;
    }
    public async getSessionToken(token: string){
        const secretKey: string = process.env.SECRET_KEY;
        const id = verify(token, secretKey) as DataStoredInToken;
        console.log(id)
        const getSession = await this.session.findUnique({
            where: {
                id: id.id
            }
        })
        console.log(getSession)
        if(!getSession) throw new HttpException(404, 'Session not found Please Create One first')
        return getSession;
    }
}