import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { UserRole } from 'src/shared/enums/roles.enums';
import { BaseSchema } from 'src/shared/schemas/base.schema';

export type UserDocument = HydratedDocument<User>;

@Schema({timestamps:true})
export class User extends BaseSchema {
  @Prop({
    unique: true,
    required: true,
  })
  username: string;

  @Prop({ required: true })
  fullname: string;

  @Prop({
    unique: true,
    required: true,
  })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  bio: string;

  @Prop()
  profileImage: string;

  @Prop()
  ranking: string;

  @Prop({
    default: 'trainee',
  })
  role: UserRole;

  @Prop()
  sex: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
