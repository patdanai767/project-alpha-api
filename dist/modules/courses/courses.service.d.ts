import { Course } from './schemas/course.schema';
import { Model } from 'mongoose';
import { CreateCourseDto } from './dtos/create-course.dto';
import { UpdateCourseDto } from './dtos/update-course.dto';
import { User } from '../users/schemas/user.schema';
export declare class CourseService {
    private CourseModel;
    private UserModel;
    constructor(CourseModel: Model<Course>, UserModel: Model<User>);
    findAll(): Promise<Course[]>;
    findById(id: string): Promise<Course>;
    createCourse(CreateCourseDto: CreateCourseDto, userId: string): Promise<Course>;
    updataCourseById(id: string, UpdateCourseDto: UpdateCourseDto): Promise<Course>;
    deleteCourseById(id: string): Promise<Course>;
    enrollCourse(userId: string, courseId: string): Promise<Course>;
}
