import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Course, CourseDocument } from './schemas/course.schema';
import { Model, RootFilterQuery } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCourseDto } from './dtos/create-course.dto';
import { UpdateCourseDto } from './dtos/update-course.dto';
import { User } from '../users/schemas/user.schema';
import { ReviewCourseDto } from './dtos/review-course.dto';
import { Rating } from '../rating/schemas/rating.schema';

@Injectable()
export class CourseService {
  constructor(
    @InjectModel(Course.name) private CourseModel: Model<Course>,
    @InjectModel(User.name) private UserModel: Model<User>,
    @InjectModel(Rating.name) private RatingModel: Model<Rating>,
  ) {}

  async findAll(): Promise<CourseDocument[]> {
    return await this.CourseModel.find(); //populate => แปลง _id เป็น object หรือ ก็คือ relation
  }

  // async findOne(
  //   filter: RootFilterQuery<CourseDocument>,
  // ): Promise<CourseDocument> {
  //   return await this.CourseModel.findOne(filter);
  // }

  async findMyCourse(id: string) {
    return await this.CourseModel.findOne({ createdBy: id });
  }

  async createCourse(
    CreateCourseDto: CreateCourseDto,
    userId: string,
  ): Promise<CourseDocument> {
    return await this.CourseModel.create({
      createdBy: userId,
      ...CreateCourseDto,
    });
  }

  async updataCourseById(
    id: string,
    UpdateCourseDto: UpdateCourseDto,
  ): Promise<CourseDocument> {
    return await this.CourseModel.findByIdAndUpdate(id, UpdateCourseDto, {
      new: true,
    });
  }

  async deleteCourseById(id: string): Promise<CourseDocument> {
    return await this.CourseModel.findByIdAndDelete(id);
  }

  async enrollCourse(
    userId: string,
    courseId: string,
  ): Promise<CourseDocument> {
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

  async reviewCourse(
    ReviewCourseDto: ReviewCourseDto,
    userId: string,
    courseId: string,
  ): Promise<CourseDocument> {
    const createRating = await this.RatingModel.create({
      user_id: userId,
      ...ReviewCourseDto,
    });

    return await this.CourseModel.findByIdAndUpdate(
      courseId,
      {
        $push: { rating: createRating },
      },
      {
        new: true,
      },
    );
  }
}
