import { ethers } from 'ethers';
import { Squid } from '@0xsquid/sdk';
import axios from 'axios';
import { NextFunction, Request, Response } from 'express';
import { PaymentService } from '@/services/payment.service';

export class PaymentController {

    public squidTestnet = new Squid({
        baseUrl: process.env.TESTNET_SQUID_API,
        integratorId: process.env.INTEGRATOR_ID
    })

    public squidMainnet = new Squid({
        baseUrl: process.env.MAINNET_SQUID_API,
        integratorId: process.env.INTEGRATOR_ID
    })

    public payment = new PaymentService()

    public makePayment = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {

        const { amount, toAddress, net } = req.body;
        if (net !== 'mainnet' && net !== 'testnet') {
            res.status(400).send('Invalid network');
        }
        const squid = net === 'mainnet' ? this.squidMainnet : this.squidTestnet;
        try {
            await squid.init();
            const route = await this.payment.getRoute(net, amount, toAddress);
            const provider = new ethers.providers.JsonRpcProvider("https://api.avax-test.network/ext/bc/C/rpc")
            const signer = new ethers.Wallet("76585d57ace9d6a5baa80855f462f470aceaeecf3b7999a076ea5b9b861d1370", provider)
            const tx = await squid.executeRoute({
                route: route.route,
                signer: signer
            })

            /// @ts-ignore
            const txReceipt = await tx.wait();

            const getStatusParams = {
                transactionId: txReceipt.transactionHash,
                routeType: route.transactionRequest.routeType
            };

            const status = await squid.getStatus(getStatusParams);
            res.send({
                tranasctionHash: txReceipt.transactionHash,
                transactionStatus: status.status,
                transactionUrl: status.axelarTransactionUrl
            })
        } catch (error) {
            next(error);
        }

    }

    public createCoinbaseToken = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
        const {walletAddress} = req.body;
        const BASE_URI = process.env.COINBASE_URL;
        const token =  this.payment.generateToken("/onramp/v1/onramp/token","POST");
        const response = await axios.post(BASE_URI + "/onramp/v1/onramp/token",{
            "destination_wallets":[
                
            ]  
        })
    }


}