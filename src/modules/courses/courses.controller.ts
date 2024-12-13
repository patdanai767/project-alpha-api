import { Controller, Get, Param } from '@nestjs/common';
import { CourseService } from './courses.service';
import { Course } from './schemas/course.schema';

@Controller('courses')
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
}
