"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthService", {
    enumerable: true,
    get: function() {
        return AuthService;
    }
});
const _client = require("@prisma/client");
const _bcrypt = require("bcrypt");
const _jsonwebtoken = require("jsonwebtoken");
const _typedi = require("typedi");
const _config = require("../config");
const _HttpException = require("../exceptions/HttpException");
const _nodemailer = _interop_require_default(require("nodemailer"));
const _mail = require("../config/mail");
const _randomstring = _interop_require_default(require("randomstring"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function generateOTP() {
    return _randomstring.default.generate({
        length: 6,
        charset: 'numeric'
    });
}
let AuthService = class AuthService {
    async signup(userData) {
        const findUser = await this.users.findUnique({
            where: {
                email: userData.email
            }
        });
        if (findUser) throw new _HttpException.HttpException(409, `This email ${userData.email} already exists`);
        const hashedPassword = await (0, _bcrypt.hash)(userData.password, 10);
        const createUserData = this.users.create({
            data: _object_spread_props(_object_spread({}, userData), {
                password: hashedPassword
            })
        });
        return createUserData;
    }
    async login(userData) {
        const findUser = await this.users.findUnique({
            where: {
                email: userData.email
            }
        });
        if (!findUser) throw new _HttpException.HttpException(409, `This email ${userData.email} was not found`);
        const isPasswordMatching = await (0, _bcrypt.compare)(userData.password, findUser.password);
        if (!isPasswordMatching) throw new _HttpException.HttpException(409, "Password is not matching");
        const tokenData = this.createToken(findUser);
        const cookie = this.createCookie(tokenData);
        return {
            cookie,
            findUser
        };
    }
    async logout(userData) {
        const findUser = await this.users.findFirst({
            where: {
                email: userData.email,
                password: userData.password
            }
        });
        if (!findUser) throw new _HttpException.HttpException(409, "User doesn't exist");
        return findUser;
    }
    createToken(user) {
        const dataStoredInToken = {
            id: user.id
        };
        const secretKey = _config.SECRET_KEY;
        const expiresIn = 24 * 60 * 60 * 1000;
        return {
            expiresIn,
            token: (0, _jsonwebtoken.sign)(dataStoredInToken, secretKey, {
                expiresIn
            })
        };
    }
    createCookie(tokenData) {
        return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
    }
    async sendOTP(email) {
        try {
            const OTP = generateOTP();
            const createOtp = await this.otp.create({
                data: {
                    email,
                    code: OTP
                }
            });
            await this.sendMail(email, OTP);
            return createOtp;
        } catch (error) {
            return new _HttpException.HttpException(500, 'Unable to send OTP');
        }
    }
    async sendMail(email, otp) {
        try {
            const options = {
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT),
                auth: {
                    user: process.env.SMTP_MAIL,
                    pass: process.env.SMTP_APP_PASS
                }
            };
            const transporter = await _nodemailer.default.createTransport(options);
            const mailOptions = {
                from: process.env.SMPT_MAIL,
                to: email,
                subject: _mail.MAIL_SUBJECT,
                html: (0, _mail.MAIL_BODY)(otp)
            };
            const res = await transporter.sendMail(mailOptions);
        } catch (error) {
            console.log(error);
            throw new _HttpException.HttpException(500, 'Unable to send email');
        }
    }
    async verifyOTP(email, otp) {
        const findOtp = await this.otp.findFirst({
            where: {
                email,
                code: otp
            }
        });
        if (!findOtp) {
            throw new _HttpException.HttpException(403, 'Invalid OTP');
        }
        const deleteOtp = await this.otp.delete({
            where: {
                id: findOtp.id
            }
        });
        return true;
    }
    async verifyEmail(email) {
        try {
            const findUser = await this.users.findUnique({
                where: {
                    email
                }
            });
            const updateUser = await this.users.update({
                where: {
                    id: findUser.id
                },
                data: {
                    emailVerified: true
                }
            });
            if (!findUser) {
                throw new _HttpException.HttpException(404, 'User not found');
            }
            if (!updateUser) {
                throw new _HttpException.HttpException(500, 'Unable to change user email status');
            }
            return true;
        } catch (error) {
            console.error(error);
            throw new _HttpException.HttpException(500, 'Unable to verify email');
        }
    }
    constructor(){
        _define_property(this, "users", new _client.PrismaClient().user);
        _define_property(this, "otp", new _client.PrismaClient().oTP);
    }
};
AuthService = _ts_decorate([
    (0, _typedi.Service)()
], AuthService);

//# sourceMappingURL=auth.service.js.map