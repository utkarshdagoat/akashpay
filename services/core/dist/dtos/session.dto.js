"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class SessionDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsEmail)(),
    tslib_1.__metadata("design:type", String)
], SessionDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], SessionDto.prototype, "amount", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], SessionDto.prototype, "wallet", void 0);
exports.SessionDto = SessionDto;
//# sourceMappingURL=session.dto.js.map