import { NextFunction, Request, Response } from 'express';
/**
 * @name ValidationMiddleware
 * @description Allows use of decorator and non-decorator based validation
 * @param type dto
 * @param skipMissingProperties When skipping missing properties
 * @param whitelist Even if your object is an instance of a validation class it can contain additional properties that are not defined
 * @param forbidNonWhitelisted If you would rather to have an error thrown when any non-whitelisted properties are present
 */
export declare const ValidationMiddleware: (type: any, skipMissingProperties?: boolean, whitelist?: boolean, forbidNonWhitelisted?: boolean) => (req: Request, res: Response, next: NextFunction) => void;
