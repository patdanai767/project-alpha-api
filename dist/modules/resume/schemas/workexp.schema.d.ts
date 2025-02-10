import { HydratedDocument } from 'mongoose';
import { BaseSchema } from 'src/shared/schemas/base.schema';
export type WorkExperienceDocument = HydratedDocument<WorkExp>;
export declare class WorkExp extends BaseSchema {
    title: string;
    description: string;
    duration: number;
}
export declare const WorkExpSchema: import("mongoose").Schema<WorkExp, import("mongoose").Model<WorkExp, any, any, any, import("mongoose").Document<unknown, any, WorkExp> & WorkExp & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, WorkExp, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<WorkExp>> & import("mongoose").FlatRecord<WorkExp> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
