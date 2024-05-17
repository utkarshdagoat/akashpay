"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ExternalApiService", {
    enumerable: true,
    get: function() {
        return ExternalApiService;
    }
});
const _typedi = require("typedi");
const _client = require("@prisma/client");
const _HttpException = require("../exceptions/HttpException");
const _jsonwebtoken = require("jsonwebtoken");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let ExternalApiService = class ExternalApiService {
    createToken(session) {
        const dataStoredInToken = {
            id: session.id
        };
        const secretKey = process.env.SECRET_KEY;
        const expiresIn = 5 * 60 * 1000;
        return {
            expiresIn,
            token: (0, _jsonwebtoken.sign)(dataStoredInToken, secretKey, {
                expiresIn
            })
        };
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
        const newSession = await this.session.create({
            data: {
                email: data.email
            }
        });
        const token = this.createToken(newSession);
        return [
            token,
            newSession
        ];
    }
    async getSession(email, timestamp) {
        const getSession = await this.session.findUnique({
            where: {
                email
            }
        });
        if (getSession.createdAt > timestamp) throw new _HttpException.HttpException(401, 'Session Expired');
        if (!getSession) throw new _HttpException.HttpException(404, 'Session not found Please Create One first');
        return getSession;
    }
    constructor(){
        _define_property(this, "session", new _client.PrismaClient().session);
    }
};
ExternalApiService = _ts_decorate([
    (0, _typedi.Service)()
], ExternalApiService);

//# sourceMappingURL=externalApi.service.js.map