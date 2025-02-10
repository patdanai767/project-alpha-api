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
exports.ResumeSchema = exports.Resume = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const education_schema_1 = require("./education.schema");
const workexp_schema_1 = require("./workexp.schema");
const certificate_schema_1 = require("./certificate.schema");
const base_schema_1 = require("../../../shared/schemas/base.schema");
let Resume = class Resume extends base_schema_1.BaseSchema {
};
exports.Resume = Resume;
__decorate([
    (0, mongoose_1.Prop)({ type: education_schema_1.EducationSchema }),
    __metadata("design:type", Object)
], Resume.prototype, "education", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: workexp_schema_1.WorkExpSchema }),
    __metadata("design:type", Object)
], Resume.prototype, "work_experience", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: certificate_schema_1.CertificationSchema }),
    __metadata("design:type", Object)
], Resume.prototype, "certification", void 0);
exports.Resume = Resume = __decorate([
    (0, mongoose_1.Schema)()
], Resume);
exports.ResumeSchema = mongoose_1.SchemaFactory.createForClass(Resume);
//# sourceMappingURL=resume.schema.js.map