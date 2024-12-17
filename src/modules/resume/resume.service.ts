import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Resume } from './schemas/resume.schema';
import { Model } from 'mongoose';

@Injectable()
export class ResumeService {
  constructor(@InjectModel(Resume.name) private ResumeModel: Model<Resume>) {}

  async findAll():Promise<Resume[]>{
    return this.ResumeModel.find();
  }

//   async createResume()
}
