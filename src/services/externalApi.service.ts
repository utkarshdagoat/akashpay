import { Service } from "typedi";
import { PrismaClient, Session } from "@prisma/client";
import { HttpException } from "@/exceptions/HttpException";
import { SessionDto } from "@/dtos/session.dto";
import { TokenData , DataStoredInToken } from "@/interfaces/auth.interface";
import { sign } from "jsonwebtoken";

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
                email:data.email
            }
        })
        const token = this.createToken(
            newSession
        )
        return [token , newSession];
    }
    public async getSession(email: string , timestamp: Date){
        const getSession = await this.session.findUnique({
            where: {
                email
            }
        })
        if(getSession.createdAt > timestamp) throw new HttpException(401, 'Session Expired')
        if(!getSession) throw new HttpException(404, 'Session not found Please Create One first')
        return getSession;
    }
}