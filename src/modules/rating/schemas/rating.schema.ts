import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Course } from 'src/modules/courses/schemas/course.schema';
import { User, UserDocument } from 'src/modules/users/schemas/user.schema';
import { BaseSchema } from 'src/shared/schemas/base.schema';

export type RatingDocument = HydratedDocument<Rating>;

@Schema()
export class Rating extends BaseSchema {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
    autopopulate: true,
  })
  createdBy: UserDocument;

  @Prop({
    required: true,
  })
  point: number;

  @Prop({
    required: true,
  })
  description: string;
}

export const RatingSchema = SchemaFactory.createForClass(Rating);
RatingSchema.plugin(require('mongoose-autopopulate'));
