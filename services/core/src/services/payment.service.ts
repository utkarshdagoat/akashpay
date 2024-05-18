import { Service } from "typedi";
import axios from 'axios'
import { HttpException } from "@/exceptions/HttpException";
import crypto from 'crypto';
import { sign } from 'jsonwebtoken';
const GET_ROUTES_API_TESNET = process.env.TESTNET_SQUID_API + '/v1/route';
const GET_ROUTES_API_MAINET = process.env.MAINNET_SQUID_API + '/v1/route';



@Service()
export class PaymentService {
    public async getRoute(net: string, fromAmount: number, toAddress: string) {
        const api = net === 'mainnet' ? GET_ROUTES_API_MAINET : GET_ROUTES_API_TESNET;
        const fromChain = net === 'mainnet' ? process.env.TESNET_FROM_CHAIN : process.env.MAINNET_FROM_CHAIN;
        const toChain = net === 'mainnet' ? process.env.TESNET_TO_CHAIN : process.env.MAINNET_TO_CHAIN;
        const fromToken = net === 'mainnet' ? process.env.TESNET_FROM_TOKEN : process.env.MAINNET_FROM_TOKEN;
        const toToken = net === 'mainnet' ? process.env.TESNET_TO_TOKEN : process.env.MAINNET_TO_TOKEN;
        const fromAddress = process.env.FROM_ADDRESS;
        const slippage = 10;

        const url = `${api}?fromChain=${fromChain}&toChain=${toChain}&fromToken=${fromToken}&toToken=${toToken}&fromAmount=${fromAmount}&fromAddress=${fromAddress}&toAddress=${toAddress}&slippage=${slippage}`;
        try {
            const result = await axios.get(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-integrator-id': process.env.INTEGRATOR_ID
                }
            });
            const res = await result.data;
            return res.route;
        } catch (error) {
            throw new HttpException(500, 'Unable to find route for cross chain transfer')
        }
    }

    public generateToken(requestPath: string, requestMethod: string) {
        const KEY_NAME = process.env.COINBASE_KEY_NAME;
        const KEY_SECRET = process.env.COINBASE_KEY_SECRET;
        const BASE_REQUEST_URI = process.env.COINBASE_URL;
        const REQUEST_URL = requestMethod + ' ' + BASE_REQUEST_URI + requestPath;

        const token = sign({
			iss: 'coinbase-cloud',
			nbf: Math.floor(Date.now() / 1000),
			exp: Math.floor(Date.now() / 1000) + 120,
			sub: KEY_NAME,
			REQUEST_URL
		},KEY_SECRET,{
            algorithm: 'ES256',
            header:{
                alg: 'ES256',
                kid:KEY_NAME,
                nonce: crypto.randomBytes(16).toString('hex')
            }
        });
        return token
    }
}
