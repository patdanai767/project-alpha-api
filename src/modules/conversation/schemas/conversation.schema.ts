import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User, UserDocument } from 'src/modules/users/schemas/user.schema';
import { BaseSchema } from 'src/shared/schemas/base.schema';

export type ConversationDocument = HydratedDocument<Conversation>;

@Schema()
export class Conversation extends BaseSchema {
  @Prop({type:mongoose.Schema.ObjectId, ref: User.name})
  sentFromId: UserDocument;

  @Prop({type:mongoose.Schema.ObjectId, ref: User.name})
  sentToId: UserDocument;

  @Prop()
  content: string;

  @Prop()
  mediaURL: string;

  @Prop()
  seenAt: Date;
}

export const ConversationSchema = SchemaFactory.createForClass(Conversation);
