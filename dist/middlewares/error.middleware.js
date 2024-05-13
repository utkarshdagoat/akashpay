"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ErrorMiddleware", {
    enumerable: true,
    get: function() {
        return ErrorMiddleware;
    }
});
const _logger = require("../utils/logger");
const ErrorMiddleware = (error, req, res, next)=>{
    try {
        const status = error.status || 500;
        const message = error.message || 'Something went wrong';
        _logger.logger.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`);
        res.status(status).json({
            message
        });
    } catch (error) {
        next(error);
    }
};

//# sourceMappingURL=error.middleware.js.map