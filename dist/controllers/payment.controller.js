"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PaymentController", {
    enumerable: true,
    get: function() {
        return PaymentController;
    }
});
const _paymentUtil = require("../utils/paymentUtil");
let PaymentController = class PaymentController {
    async ethToNoble(req, res, next) {
        try {
            const { amount } = req.body;
            const txHash = await _paymentUtil.PaymentUtil.ethToNoble(amount);
            res.status(200).json({
                data: {
                    txHash
                },
                message: 'Transaction Successful'
            });
        } catch (error) {
            next(error);
        }
    }
    async convertToOsmo(req, res, next) {
        try {
            const { amount, wallet } = req.body;
            const txHash = await _paymentUtil.PaymentUtil.convertToOsmo(amount, wallet);
            res.status(200).json({
                data: {
                    txHash
                },
                message: 'Transaction Successful'
            });
        } catch (error) {
            next(error);
        }
    }
};

//# sourceMappingURL=payment.controller.js.map