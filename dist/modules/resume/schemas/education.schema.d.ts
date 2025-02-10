import { HydratedDocument } from "mongoose";
import { BaseSchema } from "src/shared/schemas/base.schema";
export type EducationDocument = HydratedDocument<Education>;
export declare class Education extends BaseSchema {
    placeEducated: string;
    description: string;
    duration: number;
}
export declare const EducationSchema: import("mongoose").Schema<Education, import("mongoose").Model<Education, any, any, any, import("mongoose").Document<unknown, any, Education> & Education & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Education, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Education>> & import("mongoose").FlatRecord<Education> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
