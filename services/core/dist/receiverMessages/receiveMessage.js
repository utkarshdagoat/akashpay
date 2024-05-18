"use strict";
/*
 * Copyright (c) 2024, Circle Internet Financial LTD All rights reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.recieveMessage = exports.cctpTypes = void 0;
require("dotenv/config");
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const tx_1 = require("./generated/tx");
exports.cctpTypes = [
    ["/circle.cctp.v1.MsgReceiveMessage", tx_1.MsgReceiveMessage],
];
function createDefaultRegistry() {
    return new proto_signing_1.Registry(exports.cctpTypes);
}
;
const recieveMessage = async (mnemonic, messageHex, attestationSignature) => {
    const wallet = await proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
        prefix: "noble"
    });
    const [account] = await wallet.getAccounts();
    const client = await stargate_1.SigningStargateClient.connectWithSigner("https://rpc.testnet.noble.strange.love", wallet, {
        registry: createDefaultRegistry()
    });
    // Convert the message and attestation from hex to bytes
    const messageBytes = new Uint8Array(Buffer.from(messageHex.replace("0x", ""), "hex"));
    const attestationBytes = new Uint8Array(Buffer.from(attestationSignature.replace("0x", ""), "hex"));
    console.log(account.address);
    const msg = {
        typeUrl: "/circle.cctp.v1.MsgReceiveMessage",
        value: {
            from: account.address,
            message: messageBytes,
            attestation: attestationBytes,
        }
    };
    const fee = {
        amount: [
            {
                denom: "uusdc",
                amount: "0",
            },
        ],
        gas: "200000",
    };
    const memo = "";
    const result = await client.signAndBroadcast(account.address, [msg], fee, memo);
    return result.transactionHash;
};
exports.recieveMessage = recieveMessage;
//# sourceMappingURL=receiveMessage.js.map