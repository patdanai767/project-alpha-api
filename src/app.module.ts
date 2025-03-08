import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { CoursesModule } from './modules/courses/courses.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { RatingModule } from './modules/rating/rating.module';
import { EducationModule } from './modules/education/education.module';
import { CertifiesModule } from './modules/certifies/certifies.module';
import { WorkExpsModule } from './modules/work-exps/work-exps.module';
import { ConversationModule } from './modules/conversation/conversation.module';
import { NotificationModule } from './modules/notification/notification.module';
import { CoinsModule } from './modules/coins/coins.module';
import { MeetingModule } from './modules/meeting/meeting.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    MongooseModule.forRoot(process.env.MONDB_URI),
    AuthModule,
    UsersModule,
    CoursesModule,
    ConversationModule,
    NotificationModule,
    CategoriesModule,
    RatingModule,
    EducationModule,
    CertifiesModule,
    WorkExpsModule,
    CoinsModule,
    MeetingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
