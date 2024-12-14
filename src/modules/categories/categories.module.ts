import { Module } from '@nestjs/common';
import { CategoryController } from './categories.controller';
import { CategoryService } from './categories.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CatSchema } from './schemas/cat.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name: Category.name, schema:CatSchema}])
  ],
  controllers: [CategoryController],
  providers: [CategoryService]
})

export class CategoriesModule {}
