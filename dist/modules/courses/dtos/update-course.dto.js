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
exports.UpdateCourseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const status_enums_1 = require("../../../shared/enums/status.enums");
class UpdateCourseDto {
}
exports.UpdateCourseDto = UpdateCourseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        type: String,
        description: 'Course categoryId'
    }),
    __metadata("design:type", String)
], UpdateCourseDto.prototype, "category_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        type: String,
        description: 'Course ratingId'
    }),
    __metadata("design:type", String)
], UpdateCourseDto.prototype, "rating_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: 'Building body for Arm-wrestling',
        type: String,
        description: 'Course Title'
    }),
    __metadata("design:type", String)
], UpdateCourseDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: 'Arm-wrestling is one of the most powerful competetive in the world where is every single country want to compete how strong they are.',
        type: String,
        description: 'Course description'
    }),
    __metadata("design:type", String)
], UpdateCourseDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: 800,
        type: Number,
        description: 'Course price'
    }),
    __metadata("design:type", Number)
], UpdateCourseDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: 30,
        type: Number,
        description: 'Course duration (day)'
    }),
    __metadata("design:type", Number)
], UpdateCourseDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Thumbnail.jpg',
        type: String,
        description: 'Course thumbnail'
    }),
    __metadata("design:type", String)
], UpdateCourseDto.prototype, "thumbnail", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(status_enums_1.CourseStatus, {
        message: `Invalid Status. Status should be ${status_enums_1.CourseStatus.DRAFT}, ${status_enums_1.CourseStatus.AVAILABLE}, ${status_enums_1.CourseStatus.UNAVAILABLE}`
    }),
    (0, swagger_1.ApiProperty)({
        example: status_enums_1.CourseStatus.DRAFT,
        type: String,
        description: 'Course Status',
        enum: status_enums_1.CourseStatus
    }),
    __metadata("design:type", String)
], UpdateCourseDto.prototype, "status", void 0);
//# sourceMappingURL=update-course.dto.js.map