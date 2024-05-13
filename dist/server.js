"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _app = require("./app");
const _authroute = require("./routes/auth.route");
const _usersroute = require("./routes/users.route");
const _striperoute = require("./routes/stripe.route");
const _validateEnv = require("./utils/validateEnv");
(0, _validateEnv.ValidateEnv)();
const app = new _app.App([
    new _usersroute.UserRoute(),
    new _authroute.AuthRoute(),
    new _striperoute.StripeRoutes()
]);
app.listen();

//# sourceMappingURL=server.js.map