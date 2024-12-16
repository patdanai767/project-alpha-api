import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseSchema } from 'src/shared/schemas/base.schema';

export type RatingDocument = HydratedDocument<Rating>;

@Schema()
export class Rating extends BaseSchema {
  @Prop({
    required: true,
  })
  user_id: string;

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
