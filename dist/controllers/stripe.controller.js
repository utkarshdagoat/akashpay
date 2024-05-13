"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "StripeController", {
    enumerable: true,
    get: function() {
        return StripeController;
    }
});
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
const Stripe = require('stripe');
let StripeController = class StripeController {
    constructor(){
        _define_property(this, "stripe", Stripe(process.env.STRIPE_SECRET_KEY));
        _define_property(this, "OnrampSessionResource", Stripe.StripeResource.extend({
            create: Stripe.StripeResource.method({
                method: 'POST',
                path: 'crypto/onramp_sessions'
            })
        }));
        _define_property(this, "createSession", async (req, res, next)=>{
            const { transaction_details } = req.body;
            const onrampSession = await new this.OnrampSessionResource(this.stripe).create({
                transaction_details: {
                    destination_currency: transaction_details["destination_currency"],
                    destination_exchange_amount: transaction_details["destination_exchange_amount"],
                    destination_network: transaction_details["destination_network"]
                },
                customer_ip_address: req.socket.remoteAddress
            });
            res.send({
                clientSecret: onrampSession.client_secret
            });
        });
    }
};

//# sourceMappingURL=stripe.controller.js.map