"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _app = require("./app");
const _authroute = require("./routes/auth.route");
const _usersroute = require("./routes/users.route");
const _striperoute = require("./routes/stripe.route");
const _validateEnv = require("./utils/validateEnv");
const _dashboardroute = require("./routes/dashboard.route");
const _paymentroute = require("./routes/payment.route");
const _kycroute = require("./routes/kyc.route");
(0, _validateEnv.ValidateEnv)();
const app = new _app.App([
    new _usersroute.UserRoute(),
    new _authroute.AuthRoute(),
    new _striperoute.StripeRoutes(),
    new _dashboardroute.DashBoardRoutes(),
    new _paymentroute.PaymentRoutes(),
    new _kycroute.KYCRoutes()
]);
app.listen();

//# sourceMappingURL=server.js.map