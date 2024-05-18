"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = exports.CreateUserDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateUserDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsEmail)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
exports.CreateUserDto = CreateUserDto;
class UpdateUserDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(9),
    (0, class_validator_1.MaxLength)(32),
    tslib_1.__metadata("design:type", String)
], UpdateUserDto.prototype, "password", void 0);
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=users.dto.js.map