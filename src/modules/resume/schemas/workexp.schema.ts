import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseSchema } from 'src/shared/schemas/base.schema';

export type WorkExperienceDocument = HydratedDocument<WorkExp>;

@Schema()
export class WorkExp extends BaseSchema {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  duration: number;
}

export const WorkExpSchema = SchemaFactory.createForClass(WorkExp);
