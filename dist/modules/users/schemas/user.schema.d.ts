import { HydratedDocument } from 'mongoose';
import { UserRole } from 'src/shared/enums/roles.enums';
import { BaseSchema } from 'src/shared/schemas/base.schema';
export type UserDocument = HydratedDocument<User>;
export declare class User extends BaseSchema {
    resume_id: string;
    username: string;
    fullname: string;
    email: string;
    password: string;
    bio: string;
    profileImage: string;
    ranking: string;
    role: UserRole;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, import("mongoose").Document<unknown, any, User> & User & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
