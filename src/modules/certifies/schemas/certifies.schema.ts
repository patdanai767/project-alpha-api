import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User, UserDocument } from 'src/modules/users/schemas/user.schema';
import { BaseSchema } from 'src/shared/schemas/base.schema';

export type CertificationDocument = HydratedDocument<Certification>;

@Schema({ timestamps: true })
export class Certification extends BaseSchema {
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

export const CertificationSchema = SchemaFactory.createForClass(Certification);
CertificationSchema.plugin(require('mongoose-autopopulate'));
