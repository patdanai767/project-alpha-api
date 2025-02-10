import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import {
  CatDocument,
  Category,
} from 'src/modules/categories/schemas/cat.schema';
import {
  Rating,
  RatingDocument,
} from 'src/modules/rating/schemas/rating.schema';
import { User, UserDocument } from 'src/modules/users/schemas/user.schema';
import { BaseSchema } from 'src/shared/schemas/base.schema';

export type CourseDocument = HydratedDocument<Course>;

@Schema()
export class Course extends BaseSchema {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Category.name,
    autopopulate: true,
  })
  category: CatDocument;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Rating.name }],
    autopopulate: true,
  })
  rating: RatingDocument[];

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

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
    autopopulate: true,
  })
  createdBy: UserDocument;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: User.name }] })
  trainees: UserDocument[];
}

export const CourseSchema = SchemaFactory.createForClass(Course);
CourseSchema.plugin(require('mongoose-autopopulate'));
