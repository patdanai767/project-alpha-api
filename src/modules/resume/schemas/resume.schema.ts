import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { EducationDocument, EducationSchema } from './education.schema';
import { WorkExpSchema, WorkExperienceDocument } from './workexp.schema';
import {
  CertificationDocument,
  CertificationSchema,
} from './certificate.schema';
import { BaseSchema } from 'src/shared/schemas/base.schema';

export type ResumeDocument = HydratedDocument<Resume>;

@Schema()
export class Resume extends BaseSchema {
  @Prop({ type: EducationSchema })
  education: EducationDocument;

  @Prop({ type: WorkExpSchema })
  work_experience: WorkExperienceDocument;

  @Prop({ type: CertificationSchema })
  certification: CertificationDocument;
}

export const ResumeSchema = SchemaFactory.createForClass(Resume);
