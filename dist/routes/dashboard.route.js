"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DashBoardRoutes", {
    enumerable: true,
    get: function() {
        return DashBoardRoutes;
    }
});
const _express = require("express");
const _dashboardcontroller = require("../controllers/dashboard.controller");
const _authmiddleware = require("../middlewares/auth.middleware");
const _dashboarddto = require("../dtos/dashboard.dto");
const _validationmiddleware = require("../middlewares/validation.middleware");
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
let DashBoardRoutes = class DashBoardRoutes {
    initializeRoutes() {
        this.router.all(`${this.path}/*`, _authmiddleware.AuthMiddleware);
        this.router.get(`${this.path}/applications`, this.dashboardController.getApplications);
        this.router.post(`${this.path}/applications`, (0, _validationmiddleware.ValidationMiddleware)(_dashboarddto.CreateAndUpdateApplicationDto), this.dashboardController.createApplication);
        this.router.put(`${this.path}/application/:id`, (0, _validationmiddleware.ValidationMiddleware)(_dashboarddto.CreateAndUpdateApplicationDto, true), this.dashboardController.updateApplication);
        this.router.delete(`${this.path}/application`, this.dashboardController.deleteApplication);
    }
    constructor(){
        _define_property(this, "path", "/api/dashboard");
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "dashboardController", new _dashboardcontroller.DashboardController());
        this.initializeRoutes();
    }
};

//# sourceMappingURL=dashboard.route.js.map