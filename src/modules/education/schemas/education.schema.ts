import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EducationDocument = HydratedDocument<Education>;

@Schema()
export class Education {
  @Prop()
  placeEducated: string;

  @Prop()
  description: string;

  @Prop()
  duration: string;
}

export const EducationSchema = SchemaFactory.createForClass(Education);
