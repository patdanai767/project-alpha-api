import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseSchema } from 'src/shared/schemas/base.schema';

export type NotificationDocument = HydratedDocument<Notification>;

@Schema()
export class Notification extends BaseSchema{
  @Prop()
  userId: string;

  @Prop()
  content: string;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
