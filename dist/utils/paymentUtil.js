"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PaymentUtil", {
    enumerable: true,
    get: function() {
        return PaymentUtil;
    }
});
const _receiveMessage = require("../receiverMessages/receiveMessage");
const _index = require("../burnNobleContracts/index");
const _HttpException = require("../exceptions/HttpException");
const _encoding = require("@cosmjs/encoding");
const _protosigning = require("@cosmjs/proto-signing");
const _osmojs = require("osmojs");
const _stargate = require("@cosmjs/stargate");
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
const { swapExactAmountIn } = _osmojs.osmosis.gamm.v1beta1.MessageComposer.withTypeUrl;
let PaymentUtil = class PaymentUtil {
    static async ethToNoble(amount) {
        const [messageHex, attestation] = await (0, _index.burnNoble)(process.env.ARBITRUM_TOKEN_MESSENGER_CONTRACT, process.env.ARBITRUM_USDC_ETH_CONTRACT, process.env.ARBITRUM_RPC, process.env.ESCROW_PRIV_KEY, process.env.NOBLE_ADDRESS, amount);
        if (!process.env.MNEMONIC) throw new _HttpException.HttpException(500, 'Internal Server Error (PaymentUtil.ts)');
        const txHash = await (0, _receiveMessage.recieveMessage)(process.env.MNEMONIC, messageHex, attestation);
        return txHash;
    }
    static async convertToOsmo(amount, reciepentAddress) {
        if (!process.env.MNEMONIC && process.env.NOBLE_RPC && process.env.NOBLE_OSMO_CHANNEL && process.env.GAS) throw new _HttpException.HttpException(500, 'Internal Server Error (PaymentUtil.ts)');
        const offlineSigner = await _protosigning.DirectSecp256k1HdWallet.fromMnemonic(process.env.MNEMONIC, {
            prefix: "noble"
        });
        const signerAddress = (await offlineSigner.getAccounts())[0].address;
        const osmoReciepentAddress = PaymentUtil.deriveCosmosAddress("osmo", reciepentAddress);
        const signer = await _stargate.SigningStargateClient.connectWithSigner(process.env.NOBLE_RPC, offlineSigner);
        signer.sendIbcTokens(signerAddress, osmoReciepentAddress, {
            denom: "uusdc",
            amount
        }, "transfer", process.env.NOBLE_OSMO_CHANNEL, undefined, new Date().getTime() / 1000 + 300, {
            amount: [],
            gas: process.env.GAS
        }).then((res)=>{
            return res.transactionHash;
        }).catch((err)=>{
            console.error(err);
            throw new _HttpException.HttpException(500, 'Internal Server Error (PaymentUtil.ts)-[Code-2]');
        });
    }
    async uosmoTouAkt(amount) {}
};
_define_property(PaymentUtil, "deriveCosmosAddress", (chainPrefix, address)=>{
    return (0, _encoding.toBech32)(chainPrefix, (0, _encoding.fromBech32)(address).data);
});

//# sourceMappingURL=paymentUtil.js.map