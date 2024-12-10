import { Injectable } from '@nestjs/common';
import { Course } from './schemas/course.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CoursesService {
    constructor(@InjectModel(Course.name) private CourseModel: Model<Course>) {}
}
