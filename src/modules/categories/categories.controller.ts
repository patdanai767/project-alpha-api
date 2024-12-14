import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CategoryService } from './categories.service';
import { Category } from './schemas/cat.schema';
import { CreateCatDto } from './dtos/create-cat.dtos';
import { UpdateCatDto } from './dtos/update-cat.dtos';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getCats(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get('/:id')
  async getCat(@Param('id') catId: string): Promise<Category> {
    return this.categoryService.findById(catId);
  }

  @Post()
  async createCat(@Body() CreateCatDto: CreateCatDto): Promise<Category> {
    return this.categoryService.createCat(CreateCatDto);
  }

  @Patch('/:id')
  async updateCat(
    @Param('id') catId: string,
    @Body() UpdateCatDto: UpdateCatDto,
  ): Promise<Category> {
    return this.categoryService.updateCat(catId, UpdateCatDto);
  }

  @Delete('/:id')
  async deleteCat(@Param('id') catId:string){
    return this.categoryService.deleteCat(catId)
  }
}
