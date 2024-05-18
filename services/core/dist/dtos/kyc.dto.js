"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateKYCPayload = exports.CreateKYCDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateKYCDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateKYCDto.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateKYCDto.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Date)
], CreateKYCDto.prototype, "dob", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateKYCDto.prototype, "address", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateKYCDto.prototype, "city", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateKYCDto.prototype, "state", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateKYCDto.prototype, "country", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateKYCDto.prototype, "postalCode", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUrl)(),
    tslib_1.__metadata("design:type", String)
], CreateKYCDto.prototype, "idFront", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUrl)(),
    tslib_1.__metadata("design:type", String)
], CreateKYCDto.prototype, "idBack", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUrl)(),
    tslib_1.__metadata("design:type", String)
], CreateKYCDto.prototype, "selfie", void 0);
exports.CreateKYCDto = CreateKYCDto;
class CreateKYCPayload {
}
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", CreateKYCDto)
], CreateKYCPayload.prototype, "data", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", String)
], CreateKYCPayload.prototype, "userId", void 0);
exports.CreateKYCPayload = CreateKYCPayload;
//# sourceMappingURL=kyc.dto.js.map