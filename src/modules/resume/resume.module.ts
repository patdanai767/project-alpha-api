import { Module } from '@nestjs/common';
import { ResumeController } from './resume.controller';
import { ResumeService } from './resume.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Resume, ResumeSchema } from './schemas/resume.schema';
import { Education, EducationSchema } from './schemas/education.schema';
import {
  Certification,
  CertificationSchema,
} from './schemas/certificate.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Resume.name, schema: ResumeSchema },
      { name: Education.name, schema: EducationSchema },
      { name: Certification.name, schema: CertificationSchema },
    ]),
  ],
  controllers: [ResumeController],
  providers: [ResumeService],
})
export class ResumeModule {}
