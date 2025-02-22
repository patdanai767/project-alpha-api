import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CourseService } from './courses.service';
import { Course, CourseDocument } from './schemas/course.schema';
import { CreateCourseDto } from './dtos/create-course.dto';
import { UpdateCourseDto } from './dtos/update-course.dto';
import { JwtAuthGuard } from '../auth/commons/guards/jwt.guard';
import { RoleGuard } from '../auth/commons/guards/role.guard';
import { Roles } from '../auth/commons/decorators/roles.decorator';
import { UserRole } from 'src/shared/enums/roles.enums';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthenticatedRequest } from '../auth/interfaces/authenticated-request.interface';
import { ReviewCourseDto } from './dtos/review-course.dto';

@Controller('course')
export class CoursesController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  async getCourses(): Promise<Course[]> {
    return this.courseService.findAll();
  }

  @Get('/mycourse')
  @Roles(UserRole.TRAINER)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ApiBearerAuth()
  async myCourse(
    @Request() req: AuthenticatedRequest,
  ): Promise<CourseDocument> {
    return await this.courseService.findMyCourse(req.user._id);
  }

  @Post()
  @Roles(UserRole.TRAINER)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ApiBearerAuth()
  async createCourse(
    @Body() CreateCourseDto: CreateCourseDto,
    @Request() req: AuthenticatedRequest,
  ): Promise<Course> {
    return this.courseService.createCourse(CreateCourseDto, req.user._id);
  }

  @Patch('/:id')
  @Roles(UserRole.TRAINER)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ApiBearerAuth()
  async updateCourse(
    @Param('id') courseId: string,
    @Body() UpdateCourseDto: UpdateCourseDto,
  ): Promise<Course> {
    return this.courseService.updataCourseById(courseId, UpdateCourseDto);
  }

  @Delete('/:id')
  @Roles(UserRole.TRAINER, UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ApiBearerAuth()
  async deleteCourse(@Param('id') courseId: string): Promise<Course> {
    return this.courseService.deleteCourseById(courseId);
  }

  @Patch('/:id/enroll')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async enrollCourse(
    @Param('id') courseId: string,
    @Request() req: AuthenticatedRequest,
  ) {
    return this.courseService.enrollCourse(req.user._id, courseId);
  }

  @Patch('/:id/review')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async reviewCourse(
    @Body() ReviewCourseDto: ReviewCourseDto,
    @Param('id') courseId: string,
    @Request() req: AuthenticatedRequest,
  ): Promise<Course> {
    return this.courseService.reviewCourse(
      ReviewCourseDto,
      req.user._id,
      courseId,
    );
  }
}
