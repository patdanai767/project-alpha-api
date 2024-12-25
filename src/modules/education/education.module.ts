import { Module } from '@nestjs/common';
import { EducationService } from './education.service';
import { EducationController } from './education.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Education, EducationSchema } from './schemas/education.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Education.name, schema: EducationSchema },
    ]),
  ],
  providers: [EducationService],
  controllers: [EducationController],
})
export class EducationModule {}
