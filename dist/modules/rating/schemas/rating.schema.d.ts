import { HydratedDocument } from 'mongoose';
import { BaseSchema } from 'src/shared/schemas/base.schema';
export type RatingDocument = HydratedDocument<Rating>;
export declare class Rating extends BaseSchema {
    user_id: string;
    point: number;
    description: string;
}
export declare const RatingSchema: import("mongoose").Schema<Rating, import("mongoose").Model<Rating, any, any, any, import("mongoose").Document<unknown, any, Rating> & Rating & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Rating, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Rating>> & import("mongoose").FlatRecord<Rating> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
