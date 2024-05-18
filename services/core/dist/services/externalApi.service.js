"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalApiService = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const client_1 = require("@prisma/client");
const HttpException_1 = require("@/exceptions/HttpException");
const jsonwebtoken_1 = require("jsonwebtoken");
let ExternalApiService = class ExternalApiService {
    constructor() {
        this.session = new client_1.PrismaClient().session;
    }
    createToken(session) {
        const dataStoredInToken = { id: session.id };
        const secretKey = process.env.SECRET_KEY;
        const expiresIn = 5 * 60 * 1000;
        return { expiresIn, token: (0, jsonwebtoken_1.sign)(dataStoredInToken, secretKey, { expiresIn }) };
    }
    async creatSession(data) {
        const getSession = await this.session.findUnique({
            where: {
                email: data.email
            }
        });
        if (getSession) {
            const deletSession = await this.session.delete({
                where: {
                    email: data.email
                }
            });
        }
        ;
        const newSession = await this.session.create({
            data: {
                email: data.email
            }
        });
        const token = this.createToken(newSession);
        return [token, newSession];
    }
    async getSession(email) {
        const getSession = await this.session.findUnique({
            where: {
                email
            }
        });
        if (!getSession)
            throw new HttpException_1.HttpException(404, 'Session not found Please Create One first');
        return getSession;
    }
    async getSessionToken(token) {
        const secretKey = process.env.SECRET_KEY;
        const id = (0, jsonwebtoken_1.verify)(token, secretKey);
        const getSession = await this.session.findUnique({
            where: {
                id: id.id
            }
        });
        if (!getSession)
            throw new HttpException_1.HttpException(404, 'Session not found Please Create One first');
        return getSession;
    }
};
ExternalApiService = tslib_1.__decorate([
    (0, typedi_1.Service)()
], ExternalApiService);
exports.ExternalApiService = ExternalApiService;
//# sourceMappingURL=externalApi.service.js.map