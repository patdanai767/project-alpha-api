import { Module } from '@nestjs/common';
import { ResumeController } from './resume.controller';
import { ResumeService } from './resume.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Resume, ResumeSchema } from './schemas/resume.schema';
import { WorkExp, WorkExpSchema } from '../work-exps/schemas/work-exp.schema';
import {
  Education,
  EducationSchema,
} from '../education/schemas/education.schema';
import {
  Certification,
  CertificationSchema,
} from '../certifies/schemas/certifies.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Resume.name, schema: ResumeSchema },
      { name: Education.name, schema: EducationSchema },
      { name: Certification.name, schema: CertificationSchema },
      { name: WorkExp.name, schema: WorkExpSchema },
    ]),
  ],
  controllers: [ResumeController],
  providers: [ResumeService],
  exports: [ResumeService],
})
export class ResumeModule {}
