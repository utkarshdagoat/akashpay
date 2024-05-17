"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserRoute", {
    enumerable: true,
    get: function() {
        return UserRoute;
    }
});
const _express = require("express");
const _userscontroller = require("../controllers/users.controller");
const _usersdto = require("../dtos/users.dto");
const _validationmiddleware = require("../middlewares/validation.middleware");
const _authmiddleware = require("../middlewares/auth.middleware");
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
let UserRoute = class UserRoute {
    initializeRoutes() {
        this.router.get(`${this.path}`, _authmiddleware.AuthMiddleware, this.user.getUser);
        this.router.post(`${this.path}`, (0, _validationmiddleware.ValidationMiddleware)(_usersdto.CreateUserDto), this.user.createUser);
        this.router.put(`${this.path}/:id(\\d+)`, (0, _validationmiddleware.ValidationMiddleware)(_usersdto.CreateUserDto, true), this.user.updateUser);
        this.router.delete(`${this.path}`, this.user.deleteUser);
    }
    constructor(){
        _define_property(this, "path", '/api/user');
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "user", new _userscontroller.UserController());
        this.initializeRoutes();
    }
};

//# sourceMappingURL=users.route.js.map