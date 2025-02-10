"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificationSchema = exports.Certification = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const base_schema_1 = require("../../../shared/schemas/base.schema");
let Certification = class Certification extends base_schema_1.BaseSchema {
};
exports.Certification = Certification;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Certification.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Certification.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Certification.prototype, "duration", void 0);
exports.Certification = Certification = __decorate([
    (0, mongoose_1.Schema)()
], Certification);
exports.CertificationSchema = mongoose_1.SchemaFactory.createForClass(Certification);
//# sourceMappingURL=certificate.schema.js.map