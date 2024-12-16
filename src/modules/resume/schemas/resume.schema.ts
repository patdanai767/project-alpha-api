import { Prop, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseSchema } from 'src/shared/schemas/base.schema';

export type ResumeDocument = HydratedDocument<Resume>;

@Schema()
export class Resume extends BaseSchema {
    @Prop ()
    education_id:string;

    @Prop()
    work_experience_id:string;

    @Prop()
    certification_id:string;
}
