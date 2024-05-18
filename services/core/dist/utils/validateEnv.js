"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateEnv = void 0;
const envalid_1 = require("envalid");
const ValidateEnv = () => {
    (0, envalid_1.cleanEnv)(process.env, {
        NODE_ENV: (0, envalid_1.str)(),
        PORT: (0, envalid_1.port)(),
    });
};
exports.ValidateEnv = ValidateEnv;
//# sourceMappingURL=validateEnv.js.map