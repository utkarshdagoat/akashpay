"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PaymentService", {
    enumerable: true,
    get: function() {
        return PaymentService;
    }
});
const _typedi = require("typedi");
const _axios = _interop_require_default(require("axios"));
const _HttpException = require("../exceptions/HttpException");
const _crypto = _interop_require_default(require("crypto"));
const _jsonwebtoken = require("jsonwebtoken");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
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
            const result = await _axios.default.get(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-integrator-id': process.env.INTEGRATOR_ID
                }
            });
            const res = await result.data;
            return res.route;
        } catch (error) {
            throw new _HttpException.HttpException(500, 'Unable to find route for cross chain transfer');
        }
    }
    generateToken(requestPath, requestMethod) {
        const KEY_NAME = process.env.COINBASE_KEY_NAME;
        const KEY_SECRET = process.env.COINBASE_KEY_SECRET;
        const BASE_REQUEST_URI = process.env.COINBASE_URL;
        const REQUEST_URL = requestMethod + ' ' + BASE_REQUEST_URI + requestPath;
        const token = (0, _jsonwebtoken.sign)({
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
                nonce: _crypto.default.randomBytes(16).toString('hex')
            }
        });
        return token;
    }
};
PaymentService = _ts_decorate([
    (0, _typedi.Service)()
], PaymentService);

//# sourceMappingURL=payment.service.js.map