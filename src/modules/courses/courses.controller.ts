import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CourseService } from './courses.service';
import { Course } from './schemas/course.schema';
import { CreateCourseDto } from './dtos/create-course.dto';

@Controller('course')
export class CoursesController {
    constructor(private readonly courseService: CourseService){}

    @Get()
    async getCourses():Promise<Course[]>{
        return this.courseService.findAll()
    }

    @Get('/:id')
    async getCourse(@Param('id') courseId:string):Promise<Course>{
        return this.courseService.findById(courseId)
    }

    @Post()
    async createCourse(@Body() CreateCourseDto:CreateCourseDto):Promise<Course>{
        return this.courseService.createCourse(CreateCourseDto);
    }
}
