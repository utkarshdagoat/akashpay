"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HmacUtil", {
    enumerable: true,
    get: function() {
        return HmacUtil;
    }
});
const _crypto = _interop_require_default(require("crypto"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let HmacUtil = class HmacUtil {
    static hmac256(key, msg) {
        const mac = _crypto.default.createHmac('sha256', key);
        const data = mac.update(msg).digest('hex').toLowerCase();
        return data;
    }
    static getStringToSign(body, nonce, timestamp, reqMethod, requestURI) {
        const treeMap = new Map(Object.entries(body).sort());
        let s2s = '';
        for (const [k, v] of treeMap){
            if (!k || typeof v === 'object') {
                continue;
            }
            if (v !== null && v !== undefined && String(v)) {
                s2s += `${k}=${v}&`;
            }
        }
        const bodyString = s2s.slice(0, -1);
        const CotentMd5 = _crypto.default.createHash('md5').update(bodyString).digest('hex');
        const stringToSign = reqMethod + '\n' + CotentMd5 + '\n' + requestURI + '\n' + timestamp + '\n' + nonce;
        return stringToSign;
    }
};

//# sourceMappingURL=hmacSignUtil.js.map