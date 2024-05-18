"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HmacUtil = void 0;
const tslib_1 = require("tslib");
const crypto_1 = tslib_1.__importDefault(require("crypto"));
class HmacUtil {
    static hmac256(key, msg) {
        const mac = crypto_1.default.createHmac('sha256', key);
        const data = mac.update(msg).digest('hex').toLowerCase();
        return data;
    }
    static getStringToSign(body, nonce, timestamp, reqMethod, requestURI) {
        const treeMap = new Map(Object.entries(body).sort());
        let s2s = '';
        for (const [k, v] of treeMap) {
            if (!k || typeof v === 'object') {
                continue;
            }
            if (v !== null && v !== undefined && String(v)) {
                s2s += `${k}=${v}&`;
            }
        }
        const bodyString = s2s.slice(0, -1);
        const CotentMd5 = crypto_1.default.createHash('md5').update(bodyString).digest('hex');
        const stringToSign = reqMethod + '\n' + CotentMd5 + '\n' + requestURI + '\n' + timestamp + '\n' + nonce;
        return stringToSign;
    }
}
exports.HmacUtil = HmacUtil;
//# sourceMappingURL=hmacSignUtil.js.map