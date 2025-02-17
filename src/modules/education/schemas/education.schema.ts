import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User, UserDocument } from 'src/modules/users/schemas/user.schema';

export type EducationDocument = HydratedDocument<Education>;

@Schema({timestamps:true})
export class Education {
  @Prop()
  placeEducated: string;

  @Prop()
  description: string;

  @Prop()
  duration: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
    autopopulate: true,
  })
  createdBy: UserDocument;
}

export const EducationSchema = SchemaFactory.createForClass(Education);
EducationSchema.plugin(require('mongoose-autopopulate'));
