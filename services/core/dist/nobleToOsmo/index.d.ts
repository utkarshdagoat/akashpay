export declare const deriveCosmosAddress: (chainPrefix: string, address: string) => string;
export declare const convertNobleToOsmo: (mnemonic: string, amount: string, nobleRPC: string, channel: string, reciepentAddress: string) => Promise<string | null>;
