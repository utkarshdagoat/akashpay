"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ValidateEnv", {
    enumerable: true,
    get: function() {
        return ValidateEnv;
    }
});
const _envalid = require("envalid");
const ValidateEnv = ()=>{
    (0, _envalid.cleanEnv)(process.env, {
        NODE_ENV: (0, _envalid.str)(),
        PORT: (0, _envalid.port)()
    });
};

//# sourceMappingURL=validateEnv.js.map