import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Education, EducationDocument } from './schemas/education.schema';
import { Model } from 'mongoose';
import { CreateEducationDto } from './dtos/create-education.dto';
import { UpdateEducationDto } from './dtos/update-education.dto';

@Injectable()
export class EducationService {
  constructor(
    @InjectModel(Education.name) private EducationModel: Model<Education>,
  ) {}

  async findAll(): Promise<EducationDocument[]> {
    return this.EducationModel.find();
  }

  async findOne(id: string): Promise<EducationDocument> {
    return this.EducationModel.findOne({ _id: id });
  }

  async create(
    createEducationDto: CreateEducationDto,
    id: string,
  ): Promise<EducationDocument> {
    return await this.EducationModel.create({
      createdBy: id,
      ...createEducationDto,
    });
  }

  async update(
    id: string,
    updateEducationDto: UpdateEducationDto,
  ): Promise<EducationDocument> {
    return await this.EducationModel.findOneAndUpdate(
      { _id: id },
      updateEducationDto,
      { new: true },
    );
  }

  async deleteEdc(id: string): Promise<EducationDocument> {
    return this.EducationModel.findByIdAndDelete(id);
  }
}
