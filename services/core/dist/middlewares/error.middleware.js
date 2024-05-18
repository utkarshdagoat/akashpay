"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMiddleware = void 0;
const logger_1 = require("@utils/logger");
const ErrorMiddleware = (error, req, res, next) => {
    try {
        const status = error.status || 500;
        const message = error.message || 'Something went wrong';
        logger_1.logger.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`);
        res.status(status).json({ message });
    }
    catch (error) {
        next(error);
    }
};
exports.ErrorMiddleware = ErrorMiddleware;
//# sourceMappingURL=error.middleware.js.map