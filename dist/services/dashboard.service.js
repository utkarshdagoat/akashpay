"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DashboardService", {
    enumerable: true,
    get: function() {
        return DashboardService;
    }
});
const _typedi = require("typedi");
const _client = require("@prisma/client");
const _crypto = require("crypto");
const _HttpException = require("../exceptions/HttpException");
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let DashboardService = class DashboardService {
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
        if (findApplication) throw new _HttpException.HttpException(409, `This application ${data.name} already exists`);
        const clientSecret = (0, _crypto.randomBytes)(32).toString("hex");
        const createApplication = await this.app.create({
            data: _object_spread_props(_object_spread({}, data), {
                creatorId: userId,
                clientSecret
            })
        });
        return createApplication;
    }
    async updateApplication(data, id) {
        const application = await this.app.findUnique({
            where: {
                id
            }
        });
        if (!application) throw new _HttpException.HttpException(400, "Application doesn't exist");
        const updateApplication = await this.app.update({
            where: {
                id
            },
            data: _object_spread({}, data)
        });
        return updateApplication;
    }
    async deleteApplication(id) {
        const application = await this.app.findUnique({
            where: {
                id
            }
        });
        if (!application) throw new _HttpException.HttpException(400, "Application doesn't exist");
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
    constructor(){
        _define_property(this, "app", new _client.PrismaClient().application);
    }
};
DashboardService = _ts_decorate([
    (0, _typedi.Service)()
], DashboardService);

//# sourceMappingURL=dashboard.service.js.map