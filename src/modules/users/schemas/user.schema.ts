import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Role } from 'src/shared/enums/roles.enums';
import { BaseSchema } from 'src/shared/schemas/base.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends BaseSchema {

  @Prop()
  resume_id: string;

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
  role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
