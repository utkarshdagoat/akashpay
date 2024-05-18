"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("@/app");
const auth_route_1 = require("@routes/auth.route");
const users_route_1 = require("@routes/users.route");
const stripe_route_1 = require("@/routes/stripe.route");
const validateEnv_1 = require("@utils/validateEnv");
const dashboard_route_1 = require("@/routes/dashboard.route");
const payment_route_1 = require("@/routes/payment.route");
const kyc_route_1 = require("@/routes/kyc.route");
const externalApiRoute_routes_1 = require("./routes/externalApiRoute.routes");
(0, validateEnv_1.ValidateEnv)();
const app = new app_1.App([new users_route_1.UserRoute(), new auth_route_1.AuthRoute(), new stripe_route_1.StripeRoutes(), new dashboard_route_1.DashBoardRoutes(), new payment_route_1.PaymentRoutes(), new kyc_route_1.KYCRoutes(), new externalApiRoute_routes_1.ExternalAPIRouter()]);
app.listen();
//# sourceMappingURL=server.js.map