"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardController = void 0;
const typedi_1 = require("typedi");
const dashboard_service_1 = require("@/services/dashboard.service");
class DashboardController {
    constructor() {
        this.dashboard = typedi_1.Container.get(dashboard_service_1.DashboardService);
        this.getApplications = async (req, res, next) => {
            try {
                const userId = req.user.id;
                const applications = await this.dashboard.getApplications(userId);
                res.status(200).json(applications);
            }
            catch (error) {
                next(error);
            }
        };
        this.createApplication = async (req, res, next) => {
            try {
                const userId = req.user.id;
                const application = req.body;
                const newApplicationData = await this.dashboard.createApplication(application, userId);
                res.status(201).json({ data: newApplicationData });
            }
            catch (error) {
                next(error);
            }
        };
        this.updateApplication = async (req, res, next) => {
            try {
                const application = req.body;
                const id = Number(req.params.id);
                const updateApplicationData = await this.dashboard.updateApplication(application, id);
                res.status(200).json({ data: updateApplicationData });
            }
            catch (error) {
                next(error);
            }
        };
        this.deleteApplication = async (req, res, next) => {
            try {
                const id = req.body.id;
                const deleteApplicationData = await this.dashboard.deleteApplication(id);
                res.status(200).json({ data: deleteApplicationData });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.DashboardController = DashboardController;
//# sourceMappingURL=dashboard.controller.js.map