import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Course } from './schemas/course.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCourseDto } from './dtos/create-course.dto';
import { UpdateCourseDto } from './dtos/update-course.dto';
import { User } from '../users/schemas/user.schema';

@Injectable()
export class CourseService {
  constructor(
    @InjectModel(Course.name) private CourseModel: Model<Course>,
    @InjectModel(User.name) private UserModel: Model<User>,
  ) {}

  async findAll(): Promise<Course[]> {
    return this.CourseModel.find().populate("trainees"); //populate => แปลง _id เป็น object หรือ ก็คือ relation
  }

  async findById(id: string): Promise<Course> {
    return this.CourseModel.findById(id);
  }

  async createCourse(
    CreateCourseDto: CreateCourseDto,
    userId: string,
  ): Promise<Course> {

    return this.CourseModel.create({
      createdBy: userId,
      ...CreateCourseDto,
    });
  }

  async updataCourseById(
    id: string,
    UpdateCourseDto: UpdateCourseDto,
  ): Promise<Course> {
    return this.CourseModel.findByIdAndUpdate(id, UpdateCourseDto, {
      new: true,
    });
  }

  async deleteCourseById(id: string): Promise<Course> {
    return this.CourseModel.findByIdAndDelete(id);
  }

  async enrollCourse(userId: string, courseId: string): Promise<Course> {
    const course = await this.CourseModel.findById(courseId);
    if (!course) {
      throw new NotFoundException('Course not found.');
    }

    const userExist = await this.UserModel.exists({ _id: userId });
    if (!userExist) {
      throw new NotFoundException('User not found.');
    }

    if (course.createdBy.toString() === userExist._id) {
      throw new ConflictException('You can not enroll your course.');
    }

    const user = await this.CourseModel.findOne({
      _id: courseId,
      trainees: userId,
    });
    if (user) {
      throw new ConflictException('You are already enrolled in this course.');
    }

    return await this.CourseModel.findByIdAndUpdate(
      courseId,
      {
        $push: { trainees: userId },
      },
      { new: true },
    );
  }
}
