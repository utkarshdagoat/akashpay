"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HttpException", {
    enumerable: true,
    get: function() {
        return HttpException;
    }
});
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
let HttpException = class HttpException extends Error {
    constructor(status, message){
        super(message);
        _define_property(this, "status", void 0);
        _define_property(this, "message", void 0);
        this.status = status;
        this.message = message;
    }
};

//# sourceMappingURL=HttpException.js.map