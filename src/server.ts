import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { StripeRoutes } from './routes/stripe.route';
import { ValidateEnv } from '@utils/validateEnv';
import { DashBoardRoutes } from './routes/dashboard.route';

ValidateEnv();

const app = new App([new UserRoute(), new AuthRoute(), new StripeRoutes() , new DashBoardRoutes()]);
app.listen();
