"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertNobleToOsmo = exports.deriveCosmosAddress = void 0;
const tslib_1 = require("tslib");
const sdk_1 = require("@0xsquid/sdk");
const stargate_1 = require("@cosmjs/stargate");
const proto_signing_1 = require("@cosmjs/proto-signing");
const encoding_1 = require("@cosmjs/encoding");
const osmojs_1 = require("osmojs");
const { joinPool, exitPool, exitSwapExternAmountOut, exitSwapShareAmountIn, joinSwapExternAmountIn, joinSwapShareAmountOut, swapExactAmountIn, swapExactAmountOut } = osmojs_1.osmosis.gamm.v1beta1.MessageComposer.withTypeUrl;
// Environment
// add to a file named ".env" to prevent them being uploaded to github
const dotenv = tslib_1.__importStar(require("dotenv"));
dotenv.config();
const mnemonic = process.env.MNEMONIC;
const osmosisRpc = process.env.OSMOSIS_RPC_ENDPOINT;
// addresses and IDs
const axelarChainId = "osmo-test-5";
const osmosisChainId = "grand-1";
// amount of uosmo to swap
const amount = "1000000";
const getSDK = () => {
    const squid = new sdk_1.Squid({
        baseUrl: "https://squid-api-git-feat-cosmos-mainmainnet-0xsquid.vercel.app",
    });
    return squid;
};
const deriveCosmosAddress = (chainPrefix, address) => {
    return (0, encoding_1.toBech32)(chainPrefix, (0, encoding_1.fromBech32)(address).data);
};
exports.deriveCosmosAddress = deriveCosmosAddress;
const convertNobleToOsmo = async (mnemonic, amount, nobleRPC, channel, reciepentAddress) => {
    const offlineSigner = await proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
        prefix: "noble"
    });
    const signerAddress = (await offlineSigner.getAccounts())[0].address;
    const osmoAddress = (0, exports.deriveCosmosAddress)("osmo", reciepentAddress);
    // console.log(osmoAddress)
    const signer = await stargate_1.SigningStargateClient.connectWithSigner(nobleRPC, offlineSigner);
    // console.log(signer)
    // // instantiate the SDK
    // const squid = getSDK();
    // // init the SDK
    // await squid.init();
    // console.log("Squid inited");
    // const getRoute = async () => {
    //   const fromChain = 'osmo-test-5';
    //   const toChain = 'osmo-test-5';
    //   const fromToken = 'uusdc';
    //   const toToken = 'uakt';
    //   const fromAmount = '10000';
    //   const toAddress = 'osmo1ydznk3csckrmtumcj8stehnlw9hefaqvcjpwup';
    //   const fromAddress = "noble1ydznk3csckrmtumcj8stehnlw9hefaqvc28kja";
    //   const slippage = '1';
    //   const url = `https://testnet.api.squidrouter.com/v1/route?fromChain=${fromChain}&toChain=${toChain}&fromToken=${fromToken}&toToken=${toToken}&fromAmount=${fromAmount}&fromAddress=${fromAddress}&toAddress=${toAddress}&slippage=${slippage}`;
    //   //?fromChain=${fromChain}&toChain=${toChain}&fromToken=${fromToken}&toToken=${toToken}&fromAmount=${fromAmount}&fromAddress=${fromAddress}&toAddress=${toAddress}&slippage=${slippage}
    //   try {
    //     const result = await axios.get(url, {
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'x-integrator-id': 'akash-pay-922ea47b-06b2-4c2a-9707-ddb0a44b8424'
    //       }
    //     });
    //     console.log(result.status)
    //     const res = await result.data;
    //     return res;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
    // const route = (await getRoute()).route as RouteData;
    // const txInfo = (await squid.executeRoute({
    //   signer,
    //   signerAddress,
    //   route,
    // })) as DeliverTxResponse;
    // const txLink = `https://www.mintscan.io/osmosis/txs/${txInfo.transactionHash}`;
    // console.log(`Finished! You can find your transaction here: ${txLink}`);
    // console.log(amount)
    try {
        const txHash = (await signer.sendIbcTokens(signerAddress, osmoAddress, { denom: "uusdc", amount: amount }, "transfer", channel, undefined, new Date().getTime() / 1000 + 300, { amount: [], gas: "200000" })).transactionHash;
        // console.log(txHash)
        return txHash;
    }
    catch (error) {
        console.log(error);
        return null;
    }
    //
    //const osmoSigner = await SigningStargateClient.connectWithSigner(
    //  osmosisRpc,
    //  offlineSigner
    //);
    //
    //const akashAddress = deriveCosmosAddress("akash", reciepentAddress);
    //   const client = await osmosis.ClientFactory.createRPCQueryClient({ rpcEndpoint:"https://rpc.testnet.osmosis.zone" });
    //   const {
    //   pools,
    //   prices,
    //   pairs,
    //   prettyPools
    // } = await getPoolsPricesPairs(client);
    // const tokenIn = coin(amount , "uusdc")
    // const tokenOut = coin(amount ,  "uakt")
    // const tokenInAmount = amount;
    // const tokenOutAmount= amount;
    // const routes = lookupRoutesForTrade({
    //   pools,
    //   trade: {
    //     ///@ts-ignore
    //     sell: {
    //       denom: tokenIn.denom,
    //       amount: tokenInAmount
    //     },
    //     ///@ts-ignore
    //     buy: {
    //       denom: tokenOut.denom,
    //       amount: tokenOutAmount
    //     },
    //     beliefValue: "100000",
    //   },
    //   pairs
    // }).map((tradeRoute) => {
    //   const {
    //     poolId,
    //     tokenOutDenom
    //   } = tradeRoute;
    //   return {
    //     poolId,
    //     tokenOutDenom
    //   };
    // });
    // const tokenOutMinAmount = calculateAmountWithSlippage(
    //   amount,
    //   "1"
    // );
    // const fee = FEES.osmosis.swapExactAmountIn('low'); // low, medium, high
    // ///@ts-ignore
    // const msg = swapExactAmountIn({
    //   sender: signerAddress, // osmo address
    //   ///@ts-ignore
    //   routes, // TradeRoute 
    //   tokenIn, // Coin
    //   tokenOutMinAmount // number as string with no decimals
    // });
    // const result = await signer.signAndBroadcast(
    //       signerAddress,
    //       [msg],
    //       fee,
    //       'swap tokens'
    //     );
    // try {
    //   const txHash = (await osmosigner.sendIbcTokens(
    //     signerAddress,
    //     akashAddress,
    //     { denom: "uakt", amount: amount },
    //     "transfer",
    //     channel, // Akash Osmo channel
    //     undefined,
    //     new Date().getTime() / 1000 + 300,
    //     { amount: [], gas: "200000" }
    //   )).transactionHash
    //   // console.log(txHash)
    //   return txHash
    // } catch (error) {
    //   console.log(error)
    //   return null
    // }
};
exports.convertNobleToOsmo = convertNobleToOsmo;
//# sourceMappingURL=index.js.map