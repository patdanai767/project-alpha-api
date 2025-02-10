import { CourseService } from './courses.service';
import { Course } from './schemas/course.schema';
import { CreateCourseDto } from './dtos/create-course.dto';
import { UpdateCourseDto } from './dtos/update-course.dto';
import { AuthenticatedRequest } from '../auth/interfaces/authenticated-request.interface';
export declare class CoursesController {
    private readonly courseService;
    constructor(courseService: CourseService);
    getCourses(): Promise<Course[]>;
    getCourse(courseId: string): Promise<Course>;
    createCourse(CreateCourseDto: CreateCourseDto, req: AuthenticatedRequest): Promise<Course>;
    updateCourse(courseId: string, UpdateCourseDto: UpdateCourseDto): Promise<Course>;
    deleteCourse(courseId: string): Promise<Course>;
    enrollCourse(courseId: string, req: AuthenticatedRequest): Promise<Course>;
}
