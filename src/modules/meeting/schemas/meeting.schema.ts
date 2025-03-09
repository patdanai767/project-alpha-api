import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User, UserDocument } from 'src/modules/users/schemas/user.schema';
import { meetingStatus } from 'src/shared/enums/meetingStatus.enums';

export type MeetingDocument = HydratedDocument<Meeting>;

@Schema({ timestamps: true })
export class Meeting {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
    autopopulate: true,
  })
  trainee: UserDocument;

  @Prop()
  status: meetingStatus;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
    autopopulate: true,
  })
  createdBy: UserDocument;

  @Prop()
  startedAt: Date;

  @Prop()
  endAt: Date;
}

export const MeetingSchema = SchemaFactory.createForClass(Meeting);
MeetingSchema.plugin(require('mongoose-autopopulate'));
