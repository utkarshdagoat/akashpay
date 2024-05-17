"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "burnNoble", {
    enumerable: true,
    get: function() {
        return burnNoble;
    }
});
require("dotenv").config();
const { bech32 } = require('bech32');
const Web3 = require('web3');
const tokenMessengerAbi = require('./abis/cctp/TokenMessenger.json');
const usdcAbi = require('./abis/Usdc.json');
const waitForTransaction = async (web3, txHash)=>{
    let transactionReceipt = await web3.eth.getTransactionReceipt(txHash);
    while(transactionReceipt != null && transactionReceipt.status === 'FALSE'){
        transactionReceipt = await web3.eth.getTransactionReceipt(txHash);
        await new Promise((r)=>setTimeout(r, 4000));
    }
    return transactionReceipt;
};
const burnNoble = async (ETH_TOKEN_MESSENGER_CONTRACT_ADDRESS, USDC_ETH_CONTRACT_ADDRESS, ETH_TESTNET_RPC, ETH_PRIVATE_KEY, nobleAddress, amount)=>{
    const web3 = new Web3(ETH_TESTNET_RPC);
    const ethSigner = web3.eth.accounts.privateKeyToAccount(ETH_PRIVATE_KEY);
    web3.eth.accounts.wallet.add(ethSigner);
    const ethTokenMessengerContract = new web3.eth.Contract(tokenMessengerAbi, ETH_TOKEN_MESSENGER_CONTRACT_ADDRESS, {
        from: ethSigner.address
    });
    const usdcEthContract = new web3.eth.Contract(usdcAbi, USDC_ETH_CONTRACT_ADDRESS, {
        from: ethSigner.address
    });
    console.log('Contracts initialized');
    const mintRecipient = bech32.fromWords(bech32.decode(nobleAddress).words);
    const mintRecipientBytes = new Uint8Array(32);
    mintRecipientBytes.set(mintRecipient, 32 - mintRecipient.length);
    const mintRecipientHex = web3.utils.bytesToHex(mintRecipientBytes);
    const approveTxGas = await usdcEthContract.methods.approve(ETH_TOKEN_MESSENGER_CONTRACT_ADDRESS, amount).estimateGas();
    const approveTx = await usdcEthContract.methods.approve(ETH_TOKEN_MESSENGER_CONTRACT_ADDRESS, amount).send({
        gas: approveTxGas
    });
    const approveTxReceipt = await waitForTransaction(web3, approveTx.transactionHash);
    const burnTxGas = await ethTokenMessengerContract.methods.depositForBurn(amount, 4, mintRecipientHex, USDC_ETH_CONTRACT_ADDRESS).estimateGas();
    const burnTx = await ethTokenMessengerContract.methods.depositForBurn(amount, 4, mintRecipientHex, USDC_ETH_CONTRACT_ADDRESS).send({
        gas: burnTxGas
    });
    const burnTxReceipt = await waitForTransaction(web3, burnTx.transactionHash);
    const transactionReceipt = await web3.eth.getTransactionReceipt(burnTx.transactionHash);
    const eventTopic = web3.utils.keccak256('MessageSent(bytes)');
    const log = transactionReceipt.logs.find((l)=>l.topics[0] === eventTopic);
    const messageBytes = web3.eth.abi.decodeParameters([
        'bytes'
    ], log.data)[0];
    const messageHash = web3.utils.keccak256(messageBytes);
    let attestationResponse = {
        status: 'pending'
    };
    while(attestationResponse.status != 'complete'){
        const response = await fetch(`https://iris-api-sandbox.circle.com/attestations/${messageHash}`);
        attestationResponse = await response.json();
        await new Promise((r)=>setTimeout(r, 2000));
    }
    const attestationSignature = attestationResponse.attestation;
    return [
        messageBytes,
        attestationSignature
    ];
};

//# sourceMappingURL=index.js.map