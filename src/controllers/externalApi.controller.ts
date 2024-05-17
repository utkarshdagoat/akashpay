import { ExternalApiService } from "@/services/externalApi.service";
import { Request, Response, NextFunction } from "express";
import { SessionDto } from "@/dtos/session.dto";
export class ExternalApiController{
    public externalApiService = new ExternalApiService();
    public createSession = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const sessionData: SessionDto = req.body;
            const [token, session] = await this.externalApiService.creatSession(sessionData);
            res.status(201).json({ data: { token }, message: 'Session Created' });
        } catch (error) {
            next(error);
        }
    }
}