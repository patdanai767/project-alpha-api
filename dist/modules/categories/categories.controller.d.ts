import { CategoryService } from './categories.service';
import { Category } from './schemas/cat.schema';
import { CreateCatDto } from './dtos/create-cat.dtos';
import { UpdateCatDto } from './dtos/update-cat.dtos';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getCats(): Promise<Category[]>;
    getCat(catId: string): Promise<Category>;
    createCat(CreateCatDto: CreateCatDto): Promise<Category>;
    updateCat(catId: string, UpdateCatDto: UpdateCatDto): Promise<Category>;
    deleteCat(catId: string): Promise<Category>;
}
