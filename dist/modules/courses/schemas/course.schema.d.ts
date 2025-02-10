import mongoose, { HydratedDocument } from 'mongoose';
import { CatDocument } from 'src/modules/categories/schemas/cat.schema';
import { RatingDocument } from 'src/modules/rating/schemas/rating.schema';
import { UserDocument } from 'src/modules/users/schemas/user.schema';
import { BaseSchema } from 'src/shared/schemas/base.schema';
export type CourseDocument = HydratedDocument<Course>;
export declare class Course extends BaseSchema {
    category: CatDocument;
    rating: RatingDocument[];
    title: string;
    description: string;
    price: number;
    duration: number;
    thumbnail: string;
    status: string;
    createdBy: UserDocument;
    trainees: UserDocument[];
}
export declare const CourseSchema: mongoose.Schema<Course, mongoose.Model<Course, any, any, any, mongoose.Document<unknown, any, Course> & Course & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Course, mongoose.Document<unknown, {}, mongoose.FlatRecord<Course>> & mongoose.FlatRecord<Course> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
