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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
const common_1 = require("@nestjs/common");
const course_schema_1 = require("./schemas/course.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const user_schema_1 = require("../users/schemas/user.schema");
let CourseService = class CourseService {
    constructor(CourseModel, UserModel) {
        this.CourseModel = CourseModel;
        this.UserModel = UserModel;
    }
    async findAll() {
        return this.CourseModel.find().populate("trainees");
    }
    async findById(id) {
        return this.CourseModel.findById(id);
    }
    async createCourse(CreateCourseDto, userId) {
        return this.CourseModel.create({
            createdBy: userId,
            ...CreateCourseDto,
        });
    }
    async updataCourseById(id, UpdateCourseDto) {
        return this.CourseModel.findByIdAndUpdate(id, UpdateCourseDto, {
            new: true,
        });
    }
    async deleteCourseById(id) {
        return this.CourseModel.findByIdAndDelete(id);
    }
    async enrollCourse(userId, courseId) {
        const course = await this.CourseModel.findById(courseId);
        if (!course) {
            throw new common_1.NotFoundException('Course not found.');
        }
        const userExist = await this.UserModel.exists({ _id: userId });
        if (!userExist) {
            throw new common_1.NotFoundException('User not found.');
        }
        if (course.createdBy.toString() === userExist._id) {
            throw new common_1.ConflictException('You can not enroll your course.');
        }
        const user = await this.CourseModel.findOne({
            _id: courseId,
            trainees: userId,
        });
        if (user) {
            throw new common_1.ConflictException('You are already enrolled in this course.');
        }
        return await this.CourseModel.findByIdAndUpdate(courseId, {
            $push: { trainees: userId },
        }, { new: true });
    }
};
exports.CourseService = CourseService;
exports.CourseService = CourseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(course_schema_1.Course.name)),
    __param(1, (0, mongoose_2.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], CourseService);
//# sourceMappingURL=courses.service.js.map