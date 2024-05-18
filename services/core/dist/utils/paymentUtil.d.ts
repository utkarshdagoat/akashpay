export declare class PaymentUtil {
    static ethToNoble(amount: number): Promise<any>;
    static deriveCosmosAddress: (chainPrefix: string, address: string) => string;
    static convertToOsmo(amount: string, reciepentAddress: string): Promise<string>;
    uosmoTouAkt(amount: string): Promise<void>;
}
