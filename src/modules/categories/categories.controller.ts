import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CategoryService } from './categories.service';
import { Category } from './schemas/cat.schema';
import { CreateCatDto } from './dtos/create-cat.dtos';
import { UpdateCatDto } from './dtos/update-cat.dtos';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from '../auth/commons/decorators/roles.decorator';
import { UserRole } from 'src/shared/enums/roles.enums';
import { RoleGuard } from '../auth/commons/guards/role.guard';
import { JwtAuthGuard } from '../auth/commons/guards/jwt.guard';

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
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard,RoleGuard)
  @Roles(UserRole.ADMIN)
  async createCat(@Body() CreateCatDto: CreateCatDto): Promise<Category> {
    return this.categoryService.createCat(CreateCatDto);
  }

  @Patch('/:id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard,RoleGuard)
  @Roles(UserRole.ADMIN)
  async updateCat(
    @Param('id') catId: string,
    @Body() UpdateCatDto: UpdateCatDto,
  ): Promise<Category> {
    return this.categoryService.updateCat(catId, UpdateCatDto);
  }

  @Delete('/:id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard,RoleGuard)
  @Roles(UserRole.ADMIN)
  async deleteCat(@Param('id') catId:string){
    return this.categoryService.deleteCat(catId)
  }
}
