"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORIGIN = exports.LOG_DIR = exports.LOG_FORMAT = exports.SECRET_KEY = exports.PORT = exports.NODE_ENV = exports.CREDENTIALS = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });
exports.CREDENTIALS = process.env.CREDENTIALS === 'true';
_a = process.env, exports.NODE_ENV = _a.NODE_ENV, exports.PORT = _a.PORT, exports.SECRET_KEY = _a.SECRET_KEY, exports.LOG_FORMAT = _a.LOG_FORMAT, exports.LOG_DIR = _a.LOG_DIR, exports.ORIGIN = _a.ORIGIN;
//# sourceMappingURL=index.js.map