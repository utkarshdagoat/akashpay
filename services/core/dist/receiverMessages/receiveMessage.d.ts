import "dotenv/config";
import { GeneratedType } from "@cosmjs/proto-signing";
export declare const cctpTypes: ReadonlyArray<[string, GeneratedType]>;
export declare const recieveMessage: (mnemonic: string, messageHex: string, attestationSignature: string) => Promise<string>;
