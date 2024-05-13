"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserController", {
    enumerable: true,
    get: function() {
        return UserController;
    }
});
const _typedi = require("typedi");
const _usersservice = require("../services/users.service");
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
let UserController = class UserController {
    constructor(){
        _define_property(this, "user", _typedi.Container.get(_usersservice.UserService));
        _define_property(this, "getUsers", async (req, res, next)=>{
            try {
                const findAllUsersData = await this.user.findAllUser();
                res.status(200).json({
                    data: findAllUsersData,
                    message: 'findAll'
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "getUserById", async (req, res, next)=>{
            try {
                const userId = Number(req.params.id);
                const findOneUserData = await this.user.findUserById(userId);
                res.status(200).json({
                    data: findOneUserData,
                    message: 'findOne'
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "createUser", async (req, res, next)=>{
            try {
                const userData = req.body;
                const createUserData = await this.user.createUser(userData);
                res.status(201).json({
                    data: createUserData,
                    message: 'created'
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "updateUser", async (req, res, next)=>{
            try {
                const userId = Number(req.params.id);
                const userData = req.body;
                const updateUserData = await this.user.updateUser(userId, userData);
                res.status(200).json({
                    data: updateUserData,
                    message: 'updated'
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "deleteUser", async (req, res, next)=>{
            try {
                const userId = Number(req.params.id);
                const deleteUserData = await this.user.deleteUser(userId);
                res.status(200).json({
                    data: deleteUserData,
                    message: 'deleted'
                });
            } catch (error) {
                next(error);
            }
        });
    }
};

//# sourceMappingURL=users.controller.js.map