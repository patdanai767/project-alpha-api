import { HydratedDocument } from 'mongoose';
import { EducationDocument } from './education.schema';
import { WorkExperienceDocument } from './workexp.schema';
import { CertificationDocument } from './certificate.schema';
import { BaseSchema } from 'src/shared/schemas/base.schema';
export type ResumeDocument = HydratedDocument<Resume>;
export declare class Resume extends BaseSchema {
    education: EducationDocument;
    work_experience: WorkExperienceDocument;
    certification: CertificationDocument;
}
export declare const ResumeSchema: import("mongoose").Schema<Resume, import("mongoose").Model<Resume, any, any, any, import("mongoose").Document<unknown, any, Resume> & Resume & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Resume, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Resume>> & import("mongoose").FlatRecord<Resume> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
