"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeController = void 0;
const tslib_1 = require("tslib");
const client_1 = require("@prisma/client");
const stripe_1 = tslib_1.__importDefault(require("stripe"));
class StripeController {
    constructor() {
        this.kyc = new client_1.PrismaClient().kYC;
        this.transaction = new client_1.PrismaClient().transaction;
        this.stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY);
        this.OnrampSessionResource = stripe_1.default.StripeResource.extend({
            create: stripe_1.default.StripeResource.method({
                method: 'POST',
                path: 'crypto/onramp_sessions',
            }),
        });
        this.createPaymentIntent = async (req, res, next) => {
            const { amount, walletAddress } = req.body;
            console.log(amount);
            try {
                const kyc = await this.kyc.findUnique({
                    where: {
                        userId: req.user.id
                    }
                });
                if (kyc.status !== client_1.kycStatus.APPROVED) {
                    res.status(401).send('User KYC is not approved');
                    throw Error;
                }
                const customer = await this.stripe.customers.create({
                    name: `${kyc.firstName} ${kyc.lastName}`,
                    address: {
                        line1: kyc.address,
                        postal_code: kyc.postalCode,
                        city: kyc.city,
                        state: kyc.state,
                        country: 'US',
                    },
                });
                const AmountInCents = amount * 100;
                const paymentIntent = await this.stripe.paymentIntents.create({
                    amount: AmountInCents,
                    currency: 'usd',
                    description: 'Software development services',
                    customer: customer.id
                });
                if (paymentIntent) {
                    const transaction = await this.transaction.create({
                        data: {
                            userId: req.user.id,
                            amount: amount,
                            walletAddress
                        }
                    });
                }
                res.send({
                    clientSecret: paymentIntent.client_secret,
                });
            }
            catch (error) {
                next(error);
            }
        };
        this.createExternalAPIPaymentIntent = async (req, res, next) => {
            const { userData, amount } = req.body;
            try {
                const customer = await this.stripe.customers.create({
                    name: `${userData.firstName} ${userData.lastName}`,
                    address: {
                        line1: userData.address,
                        postal_code: userData.postalCode,
                        city: userData.city,
                        state: userData.state,
                        country: 'US',
                    },
                });
                const AmountInCents = amount * 100;
                const paymentIntent = await this.stripe.paymentIntents.create({
                    amount: AmountInCents,
                    currency: 'usd',
                    description: 'Software development services',
                    customer: customer.id
                });
                res.send({
                    clientSecret: paymentIntent.client_secret,
                });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.StripeController = StripeController;
//# sourceMappingURL=stripe.controller.js.map