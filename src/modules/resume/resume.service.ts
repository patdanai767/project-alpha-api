import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Resume } from './schemas/resume.schema';
import { Model } from 'mongoose';
import { CreateResumeDto } from './dtos/create-resume.dto';
import { WorkExp } from '../work-exps/schemas/work-exp.schema';
import { Education } from '../education/schemas/education.schema';
import { Certification } from '../certifies/schemas/certifies.schema';

@Injectable()
export class ResumeService {
  constructor(
    @InjectModel(Resume.name) private ResumeModel: Model<Resume>,
    @InjectModel(WorkExp.name) private WorkExpModel: Model<WorkExp>,
    @InjectModel(Education.name) private EducationModel: Model<Education>,
    @InjectModel(Certification.name)
    private CertificationModel: Model<Certification>,
  ) {}

  async findAll(): Promise<Resume[]> {
    return this.ResumeModel.find().populate([
      'education',
      'work_experience',
      'certification',
    ]);
  }

  async findById(id: string): Promise<Resume> {
    return await this.ResumeModel.findById(id);
  }

  async findByIdWithPop(id: string): Promise<Resume> {
    return (await this.ResumeModel.findById(id)).populate([
      'education',
      'work_experience',
      'certification',
    ]);
  }

  async createResume(CreateResumeDto: CreateResumeDto): Promise<Resume> {
    const education = await this.EducationModel.create(CreateResumeDto.workExp);
    const certification = await this.CertificationModel.create(
      CreateResumeDto.certification,
    );
    const workExp = await this.WorkExpModel.create(CreateResumeDto.workExp);
    const resumeVal = {
      certification: certification._id,
      education: education._id,
      work_experience: workExp._id,
    };
    return this.ResumeModel.create(resumeVal);
  }

  async deleteResume(id: string): Promise<Resume> {
    return await this.ResumeModel.findByIdAndDelete(id);
  }
}
