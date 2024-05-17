"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateKYCDto", {
    enumerable: true,
    get: function() {
        return CreateKYCDto;
    }
});
const _classvalidator = require("class-validator");
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
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let CreateKYCDto = class CreateKYCDto {
    constructor(){
        _define_property(this, "firstName", void 0);
        _define_property(this, "lastName", void 0);
        _define_property(this, "dob", void 0);
        _define_property(this, "address", void 0);
        _define_property(this, "city", void 0);
        _define_property(this, "state", void 0);
        _define_property(this, "country", void 0);
        _define_property(this, "postalCode", void 0);
        _define_property(this, "idFront", void 0);
        _define_property(this, "idBack", void 0);
        _define_property(this, "selfie", void 0);
    }
};
_ts_decorate([
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], CreateKYCDto.prototype, "firstName", void 0);
_ts_decorate([
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], CreateKYCDto.prototype, "lastName", void 0);
_ts_decorate([
    (0, _classvalidator.IsNotEmpty)(),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], CreateKYCDto.prototype, "dob", void 0);
_ts_decorate([
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], CreateKYCDto.prototype, "address", void 0);
_ts_decorate([
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], CreateKYCDto.prototype, "city", void 0);
_ts_decorate([
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], CreateKYCDto.prototype, "state", void 0);
_ts_decorate([
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], CreateKYCDto.prototype, "country", void 0);
_ts_decorate([
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], CreateKYCDto.prototype, "postalCode", void 0);
_ts_decorate([
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsUrl)(),
    _ts_metadata("design:type", String)
], CreateKYCDto.prototype, "idFront", void 0);
_ts_decorate([
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsUrl)(),
    _ts_metadata("design:type", String)
], CreateKYCDto.prototype, "idBack", void 0);
_ts_decorate([
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.IsUrl)(),
    _ts_metadata("design:type", String)
], CreateKYCDto.prototype, "selfie", void 0);

//# sourceMappingURL=kyc.dto.js.map