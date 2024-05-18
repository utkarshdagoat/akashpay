"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationMiddleware = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const HttpException_1 = require("@exceptions/HttpException");
/**
 * @name ValidationMiddleware
 * @description Allows use of decorator and non-decorator based validation
 * @param type dto
 * @param skipMissingProperties When skipping missing properties
 * @param whitelist Even if your object is an instance of a validation class it can contain additional properties that are not defined
 * @param forbidNonWhitelisted If you would rather to have an error thrown when any non-whitelisted properties are present
 */
const ValidationMiddleware = (type, skipMissingProperties = false, whitelist = false, forbidNonWhitelisted = false) => {
    return (req, res, next) => {
        const dto = (0, class_transformer_1.plainToInstance)(type, req.body);
        (0, class_validator_1.validateOrReject)(dto, { skipMissingProperties, whitelist, forbidNonWhitelisted })
            .then(() => {
            req.body = dto;
            next();
        })
            .catch((errors) => {
            const message = errors.map((error) => Object.values(error.constraints)).join(', ');
            next(new HttpException_1.HttpException(400, message));
        });
    };
};
exports.ValidationMiddleware = ValidationMiddleware;
//# sourceMappingURL=validation.middleware.js.map