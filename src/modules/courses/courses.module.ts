import { Module } from '@nestjs/common';
import { CourseService } from './courses.service';
import { CoursesController } from './courses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Course, CourseSchema } from './schemas/course.schema';
import { UsersModule } from '../users/users.module';
import { User, UserSchema } from '../users/schemas/user.schema';
import { Category, CatSchema } from '../categories/schemas/cat.schema';
import { Rating, RatingSchema } from '../rating/schemas/rating.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Course.name, schema: CourseSchema },
      { name: User.name, schema: UserSchema },
      { name: Category.name, schema: CatSchema },
      { name: Rating.name, schema: RatingSchema },
    ]),
  ],
  providers: [CourseService],
  controllers: [CoursesController],
})
export class CoursesModule {}
