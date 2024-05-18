"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const axios_1 = tslib_1.__importDefault(require("axios"));
const HttpException_1 = require("@/exceptions/HttpException");
const crypto_1 = tslib_1.__importDefault(require("crypto"));
const jsonwebtoken_1 = require("jsonwebtoken");
const GET_ROUTES_API_TESNET = process.env.TESTNET_SQUID_API + '/v1/route';
const GET_ROUTES_API_MAINET = process.env.MAINNET_SQUID_API + '/v1/route';
let PaymentService = class PaymentService {
    async getRoute(net, fromAmount, toAddress) {
        const api = net === 'mainnet' ? GET_ROUTES_API_MAINET : GET_ROUTES_API_TESNET;
        const fromChain = net === 'mainnet' ? process.env.TESNET_FROM_CHAIN : process.env.MAINNET_FROM_CHAIN;
        const toChain = net === 'mainnet' ? process.env.TESNET_TO_CHAIN : process.env.MAINNET_TO_CHAIN;
        const fromToken = net === 'mainnet' ? process.env.TESNET_FROM_TOKEN : process.env.MAINNET_FROM_TOKEN;
        const toToken = net === 'mainnet' ? process.env.TESNET_TO_TOKEN : process.env.MAINNET_TO_TOKEN;
        const fromAddress = process.env.FROM_ADDRESS;
        const slippage = 10;
        const url = `${api}?fromChain=${fromChain}&toChain=${toChain}&fromToken=${fromToken}&toToken=${toToken}&fromAmount=${fromAmount}&fromAddress=${fromAddress}&toAddress=${toAddress}&slippage=${slippage}`;
        try {
            const result = await axios_1.default.get(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-integrator-id': process.env.INTEGRATOR_ID
                }
            });
            const res = await result.data;
            return res.route;
        }
        catch (error) {
            throw new HttpException_1.HttpException(500, 'Unable to find route for cross chain transfer');
        }
    }
    generateToken(requestPath, requestMethod) {
        const KEY_NAME = process.env.COINBASE_KEY_NAME;
        const KEY_SECRET = process.env.COINBASE_KEY_SECRET;
        const BASE_REQUEST_URI = process.env.COINBASE_URL;
        const REQUEST_URL = requestMethod + ' ' + BASE_REQUEST_URI + requestPath;
        const token = (0, jsonwebtoken_1.sign)({
            iss: 'coinbase-cloud',
            nbf: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + 120,
            sub: KEY_NAME,
            REQUEST_URL
        }, KEY_SECRET, {
            algorithm: 'ES256',
            header: {
                alg: 'ES256',
                kid: KEY_NAME,
                nonce: crypto_1.default.randomBytes(16).toString('hex')
            }
        });
        return token;
    }
};
PaymentService = tslib_1.__decorate([
    (0, typedi_1.Service)()
], PaymentService);
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map