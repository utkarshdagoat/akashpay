import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { StripeRoutes } from '@/routes/stripe.route';
import { ValidateEnv } from '@utils/validateEnv';
import { DashBoardRoutes } from '@/routes/dashboard.route';
import { PaymentRoutes } from '@/routes/payment.route';
import { KYCRoutes } from '@/routes/kyc.route';
import { ExternalAPIRouter } from './routes/externalApiRoute.routes';
ValidateEnv();

const app = new App([new UserRoute(), new AuthRoute(), new StripeRoutes() , new DashBoardRoutes() , new PaymentRoutes() , new KYCRoutes() , new ExternalAPIRouter()]);
app.listen();
