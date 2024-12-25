import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Education } from './schemas/education.schema';
import { Model } from 'mongoose';

@Injectable()
export class EducationService {
    constructor(@InjectModel(Education.name) private EducationModel:Model<Education>) {}

    async findAll():Promise<Education[]>{
        return this.EducationModel.find();
    }

    // async createEdc():Promise<Education>{
    //     return this.EducationModel.create()
    // }

    async deleteEdc(id:string):Promise<Education>{
        return this.EducationModel.findByIdAndDelete(id)
    }
}
