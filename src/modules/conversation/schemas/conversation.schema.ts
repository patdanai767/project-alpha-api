import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User, UserDocument } from 'src/modules/users/schemas/user.schema';
import { BaseSchema } from 'src/shared/schemas/base.schema';

export type ConversationDocument = HydratedDocument<Conversation>;

@Schema({timestamps:true})
export class Conversation extends BaseSchema {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
    autopopulate: true,
  })
  sentFromId: UserDocument;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
    autopopulate: true,
  })
  sentToId: UserDocument;

  @Prop()
  content: string;

  @Prop()
  mediaURL: string;

  @Prop()
  seenAt: Date;
}

export const ConversationSchema = SchemaFactory.createForClass(Conversation);
ConversationSchema.plugin(require('mongoose-autopopulate'));
