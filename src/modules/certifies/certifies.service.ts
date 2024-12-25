import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Certification } from './schemas/certifies.schema';
import { Model } from 'mongoose';
import { CreateCertifyDto } from './dtos/create-certifies.dto';

@Injectable()
export class CertifiesService {
  constructor(
    @InjectModel(Certification.name)
    private CertificationModel: Model<Certification>,
  ) {}

  async findAll(): Promise<Certification[]> {
    return await this.CertificationModel.find();
  }

  async createCertify(
    CreateCertifyDto: CreateCertifyDto,
  ): Promise<Certification> {
    return await this.CertificationModel.create(CreateCertifyDto);
  }

  async deleteCertify(id: string): Promise<Certification> {
    return await this.CertificationModel.findByIdAndDelete(id);
  }
}
