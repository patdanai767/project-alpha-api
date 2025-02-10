import { HydratedDocument } from 'mongoose';
import { BaseSchema } from 'src/shared/schemas/base.schema';
export type CatDocument = HydratedDocument<Category>;
export declare class Category extends BaseSchema {
    title: string;
    description: string;
    slug: string;
}
export declare const CatSchema: import("mongoose").Schema<Category, import("mongoose").Model<Category, any, any, any, import("mongoose").Document<unknown, any, Category> & Category & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Category, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Category>> & import("mongoose").FlatRecord<Category> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
