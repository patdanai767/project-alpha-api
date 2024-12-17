import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { BaseSchema } from "src/shared/schemas/base.schema";

export type EducationDocument = HydratedDocument<Education>;

@Schema()
export class Education extends BaseSchema{
    @Prop()
    placeEducated:string;

    @Prop()
    description:string;

    @Prop()
    duration:number;
}

export const EducationSchema = SchemaFactory.createForClass(Education);