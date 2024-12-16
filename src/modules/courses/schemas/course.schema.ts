import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User, UserDocument } from 'src/modules/users/schemas/user.schema';
import { BaseSchema } from 'src/shared/schemas/base.schema';

export type CourseDocument = HydratedDocument<Course>;

@Schema()
export class Course extends BaseSchema {
  @Prop()
  category_id: string;

  @Prop()
  rating_id: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  duration: number;

  @Prop()
  thumbnail: string;

  @Prop()
  status: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  createdBy: UserDocument;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: User.name }] })
  trainees: UserDocument[];
}

export const CourseSchema = SchemaFactory.createForClass(Course);
