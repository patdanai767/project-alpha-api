import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Certification,
  CertificationDocument,
} from './schemas/certifies.schema';
import { Model } from 'mongoose';
import { CreateCertifyDto } from './dtos/create-certifies.dto';
import { UpdateCertifyDto } from './dtos/update-cretifies.dto';

@Injectable()
export class CertifiesService {
  constructor(
    @InjectModel(Certification.name)
    private CertificationModel: Model<Certification>,
  ) {}

  async findAll(): Promise<CertificationDocument[]> {
    return await this.CertificationModel.find();
  }

  async findOne(id: string): Promise<CertificationDocument> {
    return this.CertificationModel.findOne({ _id: id });
  }

  async create(
    createEducationDto: CreateCertifyDto,
    id: string,
  ): Promise<CertificationDocument> {
    return await this.CertificationModel.create({
      createdBy: id,
      ...createEducationDto,
    });
  }

  async update(
    id: string,
    updateEducationDto: UpdateCertifyDto,
  ): Promise<CertificationDocument> {
    return await this.CertificationModel.findOneAndUpdate(
      { _id: id },
      updateEducationDto,
      { new: true },
    );
  }
  async deleteCertify(id: string): Promise<CertificationDocument> {
    return await this.CertificationModel.findByIdAndDelete(id);
  }
}
