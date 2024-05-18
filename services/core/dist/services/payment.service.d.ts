export declare class PaymentService {
    getRoute(net: string, fromAmount: number, toAddress: string): Promise<any>;
    generateToken(requestPath: string, requestMethod: string): string;
}
