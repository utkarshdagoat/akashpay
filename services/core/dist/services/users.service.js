"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const tslib_1 = require("tslib");
const client_1 = require("@prisma/client");
const bcrypt_1 = require("bcrypt");
const typedi_1 = require("typedi");
const HttpException_1 = require("@/exceptions/HttpException");
let UserService = class UserService {
    constructor() {
        this.user = new client_1.PrismaClient().user;
    }
    async findAllUser() {
        const allUser = await this.user.findMany();
        return allUser;
    }
    async findUserById(userId) {
        const findUser = await this.user.findUnique({ where: { id: userId } });
        if (!findUser)
            throw new HttpException_1.HttpException(409, "User doesn't exist");
        return findUser;
    }
    async createUser(userData) {
        const findUser = await this.user.findUnique({ where: { email: userData.email } });
        if (findUser)
            throw new HttpException_1.HttpException(409, `This email ${userData.email} already exists`);
        const hashedPassword = await (0, bcrypt_1.hash)(userData.password, 10);
        const createUserData = await this.user.create({ data: Object.assign(Object.assign({}, userData), { password: hashedPassword }) });
        return createUserData;
    }
    async updateUser(userId, userData) {
        const findUser = await this.user.findUnique({ where: { id: userId } });
        if (!findUser)
            throw new HttpException_1.HttpException(409, "User doesn't exist");
        const hashedPassword = await (0, bcrypt_1.hash)(userData.password, 10);
        const updateUserData = await this.user.update({ where: { id: userId }, data: Object.assign(Object.assign({}, userData), { password: hashedPassword }) });
        return updateUserData;
    }
    async deleteUser() {
        const deleteUserData = await this.user.deleteMany();
    }
};
UserService = tslib_1.__decorate([
    (0, typedi_1.Service)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=users.service.js.map