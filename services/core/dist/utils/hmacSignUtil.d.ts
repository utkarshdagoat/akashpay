export declare class HmacUtil {
    static hmac256(key: string, msg: string): string;
    static getStringToSign(body: Record<string, any>, nonce: string, timestamp: string, reqMethod: string, requestURI: string): string;
}
