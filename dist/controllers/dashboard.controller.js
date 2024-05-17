"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DashboardController", {
    enumerable: true,
    get: function() {
        return DashboardController;
    }
});
const _typedi = require("typedi");
const _dashboardservice = require("../services/dashboard.service");
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
let DashboardController = class DashboardController {
    constructor(){
        _define_property(this, "dashboard", _typedi.Container.get(_dashboardservice.DashboardService));
        _define_property(this, "getApplications", async (req, res, next)=>{
            try {
                const userId = req.user.id;
                const applications = await this.dashboard.getApplications(userId);
                res.status(200).json(applications);
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "createApplication", async (req, res, next)=>{
            try {
                const userId = req.user.id;
                const application = req.body;
                const newApplicationData = await this.dashboard.createApplication(application, userId);
                res.status(201).json({
                    data: newApplicationData
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "updateApplication", async (req, res, next)=>{
            try {
                const application = req.body;
                const id = Number(req.params.id);
                const updateApplicationData = await this.dashboard.updateApplication(application, id);
                res.status(200).json({
                    data: updateApplicationData
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "deleteApplication", async (req, res, next)=>{
            try {
                const id = req.body.id;
                const deleteApplicationData = await this.dashboard.deleteApplication(id);
                res.status(200).json({
                    data: deleteApplicationData
                });
            } catch (error) {
                next(error);
            }
        });
    }
};

//# sourceMappingURL=dashboard.controller.js.map