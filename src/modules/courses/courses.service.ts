import { Injectable } from '@nestjs/common';
import { Course } from './schemas/course.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCourseDto } from './dtos/create-course.dto';
import { UpdateCourseDto } from './dtos/update-course.dto';

@Injectable()
export class CourseService {
  constructor(@InjectModel(Course.name) private CourseModel: Model<Course>) {}

  async findAll(): Promise<Course[]> {
    return this.CourseModel.find();
  }

  async findById(id: string): Promise<Course> {
    return this.CourseModel.findById(id);
  }

  async createCourse(CreateCourseDto: CreateCourseDto): Promise<Course> {
    const createCourse = new this.CourseModel(CreateCourseDto);
    return createCourse.save();
  }

  async updataCourseById(
    id: string,
    UpdateCourseDto: UpdateCourseDto,
  ): Promise<Course> {
    return this.CourseModel.findByIdAndUpdate(id, UpdateCourseDto, {
      new: true,
    });
  }

  async deleteCourseById(
    id:string,
  ):Promise<Course>{
    return this.CourseModel.findByIdAndDelete(id);
  }
}
