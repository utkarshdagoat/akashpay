import { recieveMessage } from "@/receiverMessages/receiveMessage";
import { burnNoble } from '@/burnNobleContracts/index'
import { HttpException } from "@/exceptions/HttpException";
import { fromBech32, toBech32 } from "@cosmjs/encoding";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { osmosis, FEES } from "osmojs";
import {
    lookupRoutesForTrade,
    getPoolsPricesPairs,
    calculateAmountWithSlippage
} from '@cosmology/core';
const {
    swapExactAmountIn,
} = osmosis.gamm.v1beta1.MessageComposer.withTypeUrl;
import axios from 'axios'
import { SigningStargateClient, coin } from "@cosmjs/stargate";
export class PaymentUtil {
    static async ethToNoble(amount: number) {
        const [messageHex, attestation] = await burnNoble(
            process.env.ARBITRUM_TOKEN_MESSENGER_CONTRACT,
            process.env.ARBITRUM_USDC_ETH_CONTRACT,
            process.env.ARBITRUM_RPC,
            process.env.ESCROW_PRIV_KEY,
            process.env.NOBLE_ADDRESS,
            amount
        )
        if (!process.env.MNEMONIC) throw new HttpException(500, 'Internal Server Error (PaymentUtil.ts)')
        const txHash = await recieveMessage(
            process.env.MNEMONIC,
            messageHex,
            attestation
        )
        return txHash
    }
    static deriveCosmosAddress = (
        chainPrefix: string,
        address: string
    ): string => {
        return toBech32(chainPrefix, fromBech32(address).data);
    };
    static  async convertToOsmo(amount: string , reciepentAddress: string) {
        if (!process.env.MNEMONIC && process.env.NOBLE_RPC && process.env.NOBLE_OSMO_CHANNEL && process.env.GAS) throw new HttpException(500, 'Internal Server Error (PaymentUtil.ts)')
        const offlineSigner = await DirectSecp256k1HdWallet.fromMnemonic(process.env.MNEMONIC, {
            prefix: "noble"
        })
        const signerAddress = (await offlineSigner.getAccounts())[0].address;
        const osmoReciepentAddress = PaymentUtil.deriveCosmosAddress("osmo", reciepentAddress)

        const signer = await SigningStargateClient.connectWithSigner(
            process.env.NOBLE_RPC,
            offlineSigner
        );
        signer.sendIbcTokens(
            signerAddress,
            osmoReciepentAddress,
            { denom: "uusdc", amount },
            "transfer",
            process.env.NOBLE_OSMO_CHANNEL,
            undefined,
            new Date().getTime() / 1000 + 300,
            { amount: [], gas: process.env.GAS }
        ).then((res) => {
            return res.transactionHash
        }).catch((err) => {
            console.error(err)
            throw new HttpException(500, 'Internal Server Error (PaymentUtil.ts)-[Code-2]')
        })
    }
    public async uosmoTouAkt(amount: string) {
        //TODO: Cannot implement this on testnet due to no active nodes
        // The code is written but not tested as testnet cannot be verified
        // const offlineSigner = await DirectSecp256k1HdWallet.fromMnemonic(process.env.MNEMONIC, {
        //     prefix: "noble"
        // })
        // const signerAddress = (await offlineSigner.getAccounts())[0].address;
        //     const client = await osmosis.ClientFactory.createRPCQueryClient({ rpcEndpoint:process.env.OSMO_RPC });
        //       const {
        //       pools,
        //       prices,
        //       pairs,
        //       prettyPools
        //     } = await getPoolsPricesPairs(client);
        //     const tokenIn = coin(amount , "ibc/DE6792CF9E521F6AD6E9A4BDF6225C9571A3B74ACC0A529F92BC5122A39D2E58")
        //     const tokenOut = coin(amount ,  "ibc/AD59D59CFB0E628E73C798415F823AB5B6257C2FE4BF67DBB5D6A677B2686E82")

        //     const signer = await SigningStargateClient.connectWithSigner(
        //         process.env.OSMO_RPC,
        //         offlineSigner
        //     );

        //     const routes = lookupRoutesForTrade({
        //       pools,
        //       trade: {
        //         ///@ts-ignore
        //         sell: {
        //           denom: tokenIn.denom,
        //           amount: tokenInAmount
        //         },
        //         ///@ts-ignore
        //         buy: {
        //           denom: tokenOut.denom,
        //           amount: tokenOutAmount
        //         },
        //         beliefValue: "100000",
        //       },
        //       pairs
        //     }).map((tradeRoute) => {
        //       const {
        //         poolId,
        //         tokenOutDenom
        //       } = tradeRoute;
        //       return {
        //         poolId,
        //         tokenOutDenom
        //       };
        //     });


        //     const tokenOutMinAmount = calculateAmountWithSlippage(
        //       "100000",
        //       "1"
        //     );

        //     const fee = FEES.osmosis.swapExactAmountIn('low'); // low, medium, high
        //     ///@ts-ignore
        //     const msg = swapExactAmountIn({
        //       sender: signerAddress, // osmo address
        //       ///@ts-ignore
        //       routes, // TradeRoute 
        //       tokenIn, // Coin
        //       tokenOutMinAmount // number as string with no decimals
        //     });
        //     const result = await signer.signAndBroadcast(
        //           signerAddress,
        //           [msg],
        //           fee,
        //           'swap tokens'
        //         );
        // }
    }
}