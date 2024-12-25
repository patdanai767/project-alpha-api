import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { BaseSchema } from 'src/shared/schemas/base.schema';
import { Education, EducationDocument } from 'src/modules/education/schemas/education.schema';
import { WorkExp, WorkExperienceDocument } from 'src/modules/work-exps/schemas/work-exp.schema';
import { Certification, CertificationDocument } from 'src/modules/certifies/schemas/certifies.schema';

export type ResumeDocument = HydratedDocument<Resume>;

@Schema()
export class Resume extends BaseSchema {
  @Prop({ type: mongoose.Schema.ObjectId, ref: Education.name })
  education: EducationDocument;

  @Prop({ type: mongoose.Schema.ObjectId, ref: WorkExp.name })
  work_experience: WorkExperienceDocument;

  @Prop({ type: mongoose.Schema.ObjectId, ref: Certification.name })
  certification: CertificationDocument;
}

export const ResumeSchema = SchemaFactory.createForClass(Resume);
