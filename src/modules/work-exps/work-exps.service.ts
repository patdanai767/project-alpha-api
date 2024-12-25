import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { WorkExp } from './schemas/work-exp.schema';
import { Model } from 'mongoose';
import { CreateWorkExpDto } from './dtos/create-work-exp.dto';

@Injectable()
export class WorkExpsService {
  constructor(
    @InjectModel(WorkExp.name) private WorkExpModel: Model<WorkExp>,
  ) {}

  async findAll(): Promise<WorkExp[]> {
    return this.WorkExpModel.find();
  }

  async createWorkExp(CreateWorkExpDto: CreateWorkExpDto): Promise<WorkExp> {
    return this.WorkExpModel.create(CreateWorkExpDto);
  }

  async deleteById(id: string): Promise<WorkExp> {
    return this.WorkExpModel.findByIdAndDelete(id);
  }
}
