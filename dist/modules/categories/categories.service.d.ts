import { Category } from './schemas/cat.schema';
import { Model } from 'mongoose';
import { CreateCatDto } from './dtos/create-cat.dtos';
import { UpdateCatDto } from './dtos/update-cat.dtos';
export declare class CategoryService {
    private catModel;
    constructor(catModel: Model<Category>);
    findAll(): Promise<Category[]>;
    findById(id: string): Promise<Category>;
    createCat(CreateCatDto: CreateCatDto): Promise<Category>;
    updateCat(id: string, UpdateCatDto: UpdateCatDto): Promise<Category>;
    deleteCat(id: string): Promise<Category>;
}
