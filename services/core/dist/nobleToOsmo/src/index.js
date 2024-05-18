"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    convertNobleToOsmo: function() {
        return convertNobleToOsmo;
    },
    deriveCosmosAddress: function() {
        return deriveCosmosAddress;
    }
});
const _sdk = require("@0xsquid/sdk");
const _stargate = require("@cosmjs/stargate");
const _protosigning = require("@cosmjs/proto-signing");
const _encoding = require("@cosmjs/encoding");
const _osmojs = require("osmojs");
const _dotenv = _interop_require_wildcard(require("dotenv"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const { joinPool, exitPool, exitSwapExternAmountOut, exitSwapShareAmountIn, joinSwapExternAmountIn, joinSwapShareAmountOut, swapExactAmountIn, swapExactAmountOut } = _osmojs.osmosis.gamm.v1beta1.MessageComposer.withTypeUrl;
_dotenv.config();
const mnemonic = process.env.MNEMONIC;
const osmosisRpc = process.env.OSMOSIS_RPC_ENDPOINT;
const axelarChainId = "osmo-test-5";
const osmosisChainId = "grand-1";
const amount = "1000000";
const getSDK = ()=>{
    const squid = new _sdk.Squid({
        baseUrl: "https://squid-api-git-feat-cosmos-mainmainnet-0xsquid.vercel.app"
    });
    return squid;
};
const deriveCosmosAddress = (chainPrefix, address)=>{
    return (0, _encoding.toBech32)(chainPrefix, (0, _encoding.fromBech32)(address).data);
};
const convertNobleToOsmo = async (mnemonic, amount, nobleRPC, channel, reciepentAddress)=>{
    const offlineSigner = await _protosigning.DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
        prefix: "noble"
    });
    const signerAddress = (await offlineSigner.getAccounts())[0].address;
    const osmoAddress = deriveCosmosAddress("osmo", reciepentAddress);
    const signer = await _stargate.SigningStargateClient.connectWithSigner(nobleRPC, offlineSigner);
    try {
        const txHash = (await signer.sendIbcTokens(signerAddress, osmoAddress, {
            denom: "uusdc",
            amount: amount
        }, "transfer", channel, undefined, new Date().getTime() / 1000 + 300, {
            amount: [],
            gas: "200000"
        })).transactionHash;
        return txHash;
    } catch (error) {
        console.log(error);
        return null;
    }
};

//# sourceMappingURL=index.js.map