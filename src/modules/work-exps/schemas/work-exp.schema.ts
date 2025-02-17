import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User, UserDocument } from 'src/modules/users/schemas/user.schema';
import { BaseSchema } from 'src/shared/schemas/base.schema';

export type WorkExperienceDocument = HydratedDocument<WorkExp>;

@Schema({timestamps:true})
export class WorkExp extends BaseSchema {
  @Prop()
  title: string;

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

export const WorkExpSchema = SchemaFactory.createForClass(WorkExp);
WorkExpSchema.plugin(require('mongoose-autopopulate'));
