"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashBoardRoutes = void 0;
const express_1 = require("express");
const dashboard_controller_1 = require("@/controllers/dashboard.controller");
const auth_middleware_1 = require("@/middlewares/auth.middleware");
const dashboard_dto_1 = require("@/dtos/dashboard.dto");
const validation_middleware_1 = require("@/middlewares/validation.middleware");
class DashBoardRoutes {
    constructor() {
        this.path = "/api/dashboard";
        this.router = (0, express_1.Router)();
        this.dashboardController = new dashboard_controller_1.DashboardController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.all(`${this.path}/*`, auth_middleware_1.AuthMiddleware);
        this.router.get(`${this.path}/applications`, this.dashboardController.getApplications);
        this.router.post(`${this.path}/applications`, (0, validation_middleware_1.ValidationMiddleware)(dashboard_dto_1.CreateAndUpdateApplicationDto), this.dashboardController.createApplication);
        this.router.put(`${this.path}/application/:id`, (0, validation_middleware_1.ValidationMiddleware)(dashboard_dto_1.CreateAndUpdateApplicationDto, true), this.dashboardController.updateApplication);
        this.router.delete(`${this.path}/application`, this.dashboardController.deleteApplication);
    }
}
exports.DashBoardRoutes = DashBoardRoutes;
//# sourceMappingURL=dashboard.route.js.map