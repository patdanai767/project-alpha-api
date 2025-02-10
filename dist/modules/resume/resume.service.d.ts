import { Resume } from './schemas/resume.schema';
import { Model } from 'mongoose';
export declare class ResumeService {
    private ResumeModel;
    constructor(ResumeModel: Model<Resume>);
    findAll(): Promise<Resume[]>;
}
