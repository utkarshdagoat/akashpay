"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _bcrypt = _interop_require_default(require("bcrypt"));
const _supertest = _interop_require_default(require("supertest"));
const _app = _interop_require_default(require("../app"));
const _authroute = _interop_require_default(require("../routes/auth.route"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
afterAll(async ()=>{
    await new Promise((resolve)=>setTimeout(()=>resolve(), 500));
});
describe('Testing Auth', ()=>{
    describe('[POST] /signup', ()=>{
        it('response should have the Create userData', async ()=>{
            const userData = {
                email: 'test@email.com',
                password: 'q1w2e3r4'
            };
            const authRoute = new _authroute.default();
            const users = authRoute.authController.authService.users;
            users.findUnique = jest.fn().mockReturnValue(null);
            users.create = jest.fn().mockReturnValue({
                id: 1,
                email: userData.email,
                password: await _bcrypt.default.hash(userData.password, 10)
            });
            const app = new _app.default([
                authRoute
            ]);
            return (0, _supertest.default)(app.getServer()).post(`${authRoute.path}signup`).send(userData).expect(201);
        });
    });
    describe('[POST] /login', ()=>{
        it('response should have the Set-Cookie header with the Authorization token', async ()=>{
            const userData = {
                email: 'test@email.com',
                password: 'q1w2e3r4'
            };
            const authRoute = new _authroute.default();
            const users = authRoute.authController.authService.users;
            users.findUnique = jest.fn().mockReturnValue({
                id: 1,
                email: userData.email,
                password: await _bcrypt.default.hash(userData.password, 10)
            });
            const app = new _app.default([
                authRoute
            ]);
            return (0, _supertest.default)(app.getServer()).post(`${authRoute.path}login`).send(userData).expect('Set-Cookie', /^Authorization=.+/);
        });
    });
});

//# sourceMappingURL=auth.test.js.map