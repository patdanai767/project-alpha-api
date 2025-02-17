import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { WorkExp, WorkExperienceDocument } from './schemas/work-exp.schema';
import { Model } from 'mongoose';
import { CreateWorkExpDto } from './dtos/create-work-exp.dto';
import { UpdateWorkExpDto } from './dtos/update-work-exp.dto';

@Injectable()
export class WorkExpsService {
  constructor(
    @InjectModel(WorkExp.name) private WorkExpModel: Model<WorkExp>,
  ) {}

  async findAll(): Promise<WorkExperienceDocument[]> {
    return this.WorkExpModel.find();
  }

  async findOne(id: string): Promise<WorkExperienceDocument> {
    return this.WorkExpModel.findOne({ _id: id });
  }

  async create(
    createWorkExpDto: CreateWorkExpDto,
    id: string,
  ): Promise<WorkExperienceDocument> {
    return await this.WorkExpModel.create({
      createdBy: id,
      ...createWorkExpDto,
    });
  }

  async update(
    id: string,
    updateWorkExpDto: UpdateWorkExpDto,
  ): Promise<WorkExperienceDocument> {
    return await this.WorkExpModel.findOneAndUpdate(
      { _id: id },
      updateWorkExpDto,
      { new: true },
    );
  }

  async deleteById(id: string): Promise<WorkExperienceDocument> {
    return this.WorkExpModel.findByIdAndDelete(id);
  }
}
