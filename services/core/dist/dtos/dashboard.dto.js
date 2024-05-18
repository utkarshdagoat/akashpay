"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAndUpdateApplicationDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateAndUpdateApplicationDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateAndUpdateApplicationDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateAndUpdateApplicationDto.prototype, "description", void 0);
exports.CreateAndUpdateApplicationDto = CreateAndUpdateApplicationDto;
//# sourceMappingURL=dashboard.dto.js.map