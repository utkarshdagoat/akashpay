"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const client_1 = require("@prisma/client");
const crypto_1 = require("crypto");
const HttpException_1 = require("@/exceptions/HttpException");
let DashboardService = class DashboardService {
    constructor() {
        this.app = new client_1.PrismaClient().application;
    }
    async getApplications(userId) {
        const application = await this.app.findMany({
            where: {
                creatorId: userId
            }
        });
        return application;
    }
    async createApplication(data, userId) {
        const findApplication = await this.app.findFirst({
            where: {
                name: data.name,
                creatorId: userId
            }
        });
        if (findApplication)
            throw new HttpException_1.HttpException(409, `This application ${data.name} already exists`);
        const clientSecret = (0, crypto_1.randomBytes)(32).toString("hex");
        const createApplication = await this.app.create({
            data: Object.assign(Object.assign({}, data), { creatorId: userId, clientSecret })
        });
        return createApplication;
    }
    async updateApplication(data, id) {
        const application = await this.app.findUnique({
            where: {
                id
            }
        });
        if (!application)
            throw new HttpException_1.HttpException(400, "Application doesn't exist");
        const updateApplication = await this.app.update({
            where: {
                id
            },
            data: Object.assign({}, data)
        });
        return updateApplication;
    }
    async deleteApplication(id) {
        const application = await this.app.findUnique({
            where: {
                id
            }
        });
        if (!application)
            throw new HttpException_1.HttpException(400, "Application doesn't exist");
        const deletedApplicationData = await this.app.delete({
            where: {
                id
            }
        });
        return deletedApplicationData;
    }
    async deleteAll() {
        const deletedApplicationsData = await this.app.deleteMany();
        return deletedApplicationsData;
    }
};
DashboardService = tslib_1.__decorate([
    (0, typedi_1.Service)()
], DashboardService);
exports.DashboardService = DashboardService;
//# sourceMappingURL=dashboard.service.js.map