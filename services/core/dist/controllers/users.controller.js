"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const typedi_1 = require("typedi");
const users_service_1 = require("@services/users.service");
class UserController {
    constructor() {
        this.user = typedi_1.Container.get(users_service_1.UserService);
        this.createUser = async (req, res, next) => {
            try {
                const userData = req.body;
                const createUserData = await this.user.createUser(userData);
                res.status(201).json({ data: createUserData, message: 'created' });
            }
            catch (error) {
                next(error);
            }
        };
        this.updateUser = async (req, res, next) => {
            try {
                const userId = Number(req.params.id);
                const userData = req.body;
                const updateUserData = await this.user.updateUser(userId, userData);
                res.status(200).json({ data: updateUserData, message: 'updated' });
            }
            catch (error) {
                next(error);
            }
        };
        this.deleteUser = async (req, res, next) => {
            try {
                await this.user.deleteUser();
                res.status(200).json({ data: "", message: 'deleted' });
            }
            catch (error) {
                next(error);
            }
        };
        this.getUser = async (req, res, next) => {
            try {
                const user = req.user;
                if (!user) {
                    res.sendStatus(403);
                }
                else {
                    res.status(200).json(user);
                }
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.UserController = UserController;
//# sourceMappingURL=users.controller.js.map