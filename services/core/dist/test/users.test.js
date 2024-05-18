"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const supertest_1 = tslib_1.__importDefault(require("supertest"));
const app_1 = tslib_1.__importDefault(require("@/app"));
const users_route_1 = tslib_1.__importDefault(require("@routes/users.route"));
afterAll(async () => {
    await new Promise(resolve => setTimeout(() => resolve(), 500));
});
describe('Testing Users', () => {
    describe('[GET] /users', () => {
        it('response findAll users', async () => {
            const usersRoute = new users_route_1.default();
            const users = usersRoute.usersController.userService.users;
            users.findMany = jest.fn().mockReturnValue([
                {
                    id: 1,
                    email: 'a@email.com',
                    password: await bcrypt_1.default.hash('q1w2e3r4!', 10),
                },
                {
                    id: 2,
                    email: 'b@email.com',
                    password: await bcrypt_1.default.hash('a1s2d3f4!', 10),
                },
                {
                    id: 3,
                    email: 'c@email.com',
                    password: await bcrypt_1.default.hash('z1x2c3v4!', 10),
                },
            ]);
            const app = new app_1.default([usersRoute]);
            return (0, supertest_1.default)(app.getServer()).get(`${usersRoute.path}`).expect(200);
        });
    });
    describe('[GET] /users/:id', () => {
        it('response findOne user', async () => {
            const userId = 1;
            const usersRoute = new users_route_1.default();
            const users = usersRoute.usersController.userService.users;
            users.findUnique = jest.fn().mockReturnValue({
                id: 1,
                email: 'a@email.com',
                password: await bcrypt_1.default.hash('q1w2e3r4!', 10),
            });
            const app = new app_1.default([usersRoute]);
            return (0, supertest_1.default)(app.getServer()).get(`${usersRoute.path}/${userId}`).expect(200);
        });
    });
    describe('[POST] /users', () => {
        it('response Create user', async () => {
            const userData = {
                email: 'test@email.com',
                password: 'q1w2e3r4',
            };
            const usersRoute = new users_route_1.default();
            const users = usersRoute.usersController.userService.users;
            users.findUnique = jest.fn().mockReturnValue(null);
            users.create = jest.fn().mockReturnValue({
                id: 1,
                email: userData.email,
                password: await bcrypt_1.default.hash(userData.password, 10),
            });
            const app = new app_1.default([usersRoute]);
            return (0, supertest_1.default)(app.getServer()).post(`${usersRoute.path}`).send(userData).expect(201);
        });
    });
    describe('[PUT] /users/:id', () => {
        it('response Update user', async () => {
            const userId = 1;
            const userData = {
                email: 'test@email.com',
                password: 'q1w2e3r4',
            };
            const usersRoute = new users_route_1.default();
            const users = usersRoute.usersController.userService.users;
            users.findUnique = jest.fn().mockReturnValue({
                id: userId,
                email: userData.email,
                password: await bcrypt_1.default.hash(userData.password, 10),
            });
            users.update = jest.fn().mockReturnValue({
                id: userId,
                email: userData.email,
                password: await bcrypt_1.default.hash(userData.password, 10),
            });
            const app = new app_1.default([usersRoute]);
            return (0, supertest_1.default)(app.getServer()).put(`${usersRoute.path}/${userId}`).send(userData).expect(200);
        });
    });
    describe('[DELETE] /users/:id', () => {
        it('response Delete user', async () => {
            const userId = 1;
            const userData = {
                email: 'test@email.com',
                password: 'q1w2e3r4',
            };
            const usersRoute = new users_route_1.default();
            const users = usersRoute.usersController.userService.users;
            users.findUnique = jest.fn().mockReturnValue({
                id: userId,
                email: userData.email,
                password: await bcrypt_1.default.hash(userData.password, 10),
            });
            users.delete = jest.fn().mockReturnValue({
                id: userId,
                email: userData.email,
                password: await bcrypt_1.default.hash(userData.password, 10),
            });
            const app = new app_1.default([usersRoute]);
            return (0, supertest_1.default)(app.getServer()).delete(`${usersRoute.path}/${userId}`).expect(200);
        });
    });
});
//# sourceMappingURL=users.test.js.map