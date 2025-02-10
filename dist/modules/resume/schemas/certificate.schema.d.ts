import { HydratedDocument } from "mongoose";
import { BaseSchema } from "src/shared/schemas/base.schema";
export type CertificationDocument = HydratedDocument<Certification>;
export declare class Certification extends BaseSchema {
    title: string;
    description: string;
    duration: number;
}
export declare const CertificationSchema: import("mongoose").Schema<Certification, import("mongoose").Model<Certification, any, any, any, import("mongoose").Document<unknown, any, Certification> & Certification & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Certification, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Certification>> & import("mongoose").FlatRecord<Certification> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
