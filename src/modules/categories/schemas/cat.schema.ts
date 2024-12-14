import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseSchema } from 'src/shared/schemas/base.schema';

export type CatDocument = HydratedDocument<Category>;

@Schema()
export class Category extends BaseSchema {

  @Prop({
    unique:true,
    required:true
  })
  title:string

  @Prop({
    required:true
  })
  description:string

  @Prop({
    unique:true,
    required:true
  })
  slug:string
}

export const CatSchema = SchemaFactory.createForClass(Category);
