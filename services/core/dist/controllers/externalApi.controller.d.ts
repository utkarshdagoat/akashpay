/// <reference types="cookie-parser" />
import { ExternalApiService } from "@/services/externalApi.service";
import { Request, Response, NextFunction } from "express";
export declare class ExternalApiController {
    externalApiService: ExternalApiService;
    createSession: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getData: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    constructor();
    ethToNoble(req: Request, res: Response, next: NextFunction): Promise<void>;
    convertToOsmo(req: Request, res: Response, next: NextFunction): Promise<void>;
    getDataFromToken(req: Request, res: Response, next: NextFunction): Promise<void>;
}
