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
    cctpTypes: function() {
        return cctpTypes;
    },
    recieveMessage: function() {
        return recieveMessage;
    }
});
require("dotenv/config");
const _protosigning = require("@cosmjs/proto-signing");
const _stargate = require("@cosmjs/stargate");
const _tx = require("./generated/tx");
const cctpTypes = [
    [
        "/circle.cctp.v1.MsgReceiveMessage",
        _tx.MsgReceiveMessage
    ]
];
function createDefaultRegistry() {
    return new _protosigning.Registry(cctpTypes);
}
const recieveMessage = async (mnemonic, messageHex, attestationSignature)=>{
    const wallet = await _protosigning.DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
        prefix: "noble"
    });
    const [account] = await wallet.getAccounts();
    const client = await _stargate.SigningStargateClient.connectWithSigner("https://rpc.testnet.noble.strange.love", wallet, {
        registry: createDefaultRegistry()
    });
    const messageBytes = new Uint8Array(Buffer.from(messageHex.replace("0x", ""), "hex"));
    const attestationBytes = new Uint8Array(Buffer.from(attestationSignature.replace("0x", ""), "hex"));
    console.log(account.address);
    const msg = {
        typeUrl: "/circle.cctp.v1.MsgReceiveMessage",
        value: {
            from: account.address,
            message: messageBytes,
            attestation: attestationBytes
        }
    };
    const fee = {
        amount: [
            {
                denom: "uusdc",
                amount: "0"
            }
        ],
        gas: "200000"
    };
    const memo = "";
    const result = await client.signAndBroadcast(account.address, [
        msg
    ], fee, memo);
    return result.transactionHash;
};

//# sourceMappingURL=receiveMessage.js.map