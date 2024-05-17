"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ExternalApiController", {
    enumerable: true,
    get: function() {
        return ExternalApiController;
    }
});
const _externalApiservice = require("../services/externalApi.service");
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
let ExternalApiController = class ExternalApiController {
    constructor(){
        _define_property(this, "externalApiService", new _externalApiservice.ExternalApiService());
        _define_property(this, "createSession", async (req, res, next)=>{
            try {
                const sessionData = req.body;
                const [token, session] = await this.externalApiService.creatSession(sessionData);
                res.status(201).json({
                    data: {
                        token
                    },
                    message: 'Session Created'
                });
            } catch (error) {
                next(error);
            }
        });
    }
};

//# sourceMappingURL=externalApi.controller.js.map