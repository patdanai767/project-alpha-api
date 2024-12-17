import { Injectable } from '@nestjs/common';
import { Category } from './schemas/cat.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCatDto } from './dtos/create-cat.dtos';
import { UpdateCatDto } from './dtos/update-cat.dtos';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category.name) private catModel: Model<Category>) {}

  async findAll(): Promise<Category[]> {
    return this.catModel.find();
  }

  async findById(id: string): Promise<Category> {
    return this.catModel.findById(id);
  }

  async createCat(CreateCatDto: CreateCatDto): Promise<Category> {
    const createCat = new this.catModel(CreateCatDto);
    return createCat.save();
  }

  async updateCat(id: string, UpdateCatDto: UpdateCatDto): Promise<Category> {
    return this.catModel.findByIdAndUpdate(id, UpdateCatDto, { new: true });
  }

  async deleteCat(id: string): Promise<Category> {
    return this.catModel.findByIdAndDelete(id);
  }
}
