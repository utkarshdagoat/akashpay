"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _supertest = _interop_require_default(require("supertest"));
const _app = _interop_require_default(require("../app"));
const _indexroute = _interop_require_default(require("../routes/index.route"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
afterAll(async ()=>{
    await new Promise((resolve)=>setTimeout(()=>resolve(), 500));
});
describe('Testing Index', ()=>{
    describe('[GET] /', ()=>{
        it('response statusCode 200', ()=>{
            const indexRoute = new _indexroute.default();
            const app = new _app.default([
                indexRoute
            ]);
            return (0, _supertest.default)(app.getServer()).get(`${indexRoute.path}`).expect(200);
        });
    });
});

//# sourceMappingURL=index.test.js.map