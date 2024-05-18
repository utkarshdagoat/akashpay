"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentUtil = void 0;
const HttpException_1 = require("@/exceptions/HttpException");
const encoding_1 = require("@cosmjs/encoding");
const osmojs_1 = require("osmojs");
const { swapExactAmountIn, } = osmojs_1.osmosis.gamm.v1beta1.MessageComposer.withTypeUrl;
const nobleToOsmo_1 = require("@/nobleToOsmo");
const nobleContracts_1 = require("nobleContracts");
///@ts-ignore
const _1 = require("");
class PaymentUtil {
    static async ethToNoble(amount) {
        const [messageHex, attestation] = await (0, nobleContracts_1.burnNoble)(process.env.ARBITRUM_TOKEN_MESSENGER_CONTRACT, process.env.ARBITRUM_USDC_ETH_CONTRACT, process.env.ARBITRUM_RPC, process.env.ESCROW_PRIV_KEY, process.env.NOBLE_ADDRESS, amount * 1000000);
        console.log(messageHex, attestation);
        if (!process.env.NOBLE_MNEMONIC)
            throw new HttpException_1.HttpException(500, 'Internal Server Error (PaymentUtil.ts)');
        const txHash = await (0, _1.recieveMessage)(process.env.NOBLE_MNEMONIC, messageHex, attestation);
        console.log(txHash);
        return txHash;
    }
    static async convertToOsmo(amount, reciepentAddress) {
        if (!process.env.NOBLE_MNEMONIC && !process.env.NOBLE_RPC && !process.env.NOBLE_OSMO_CHANNEL && !process.env.GAS)
            throw new HttpException_1.HttpException(500, 'Check the enviorment Variables ,Internal Server Error (PaymentUtil.ts)');
        const txHash = await (0, nobleToOsmo_1.convertNobleToOsmo)(process.env.NOBLE_MNEMONIC, amount, process.env.NOBLE_RPC, process.env.NOBLE_OSMO_CHANNEL, reciepentAddress);
        console.log(txHash);
        return txHash;
    }
    async uosmoTouAkt(amount) {
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
exports.PaymentUtil = PaymentUtil;
PaymentUtil.deriveCosmosAddress = (chainPrefix, address) => {
    return (0, encoding_1.toBech32)(chainPrefix, (0, encoding_1.fromBech32)(address).data);
};
//# sourceMappingURL=paymentUtil.js.map