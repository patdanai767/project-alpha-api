import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { BaseSchema } from "src/shared/schemas/base.schema";

export type CertificationDocument = HydratedDocument<Certification>;

@Schema()
export class Certification extends BaseSchema{
    @Prop()
    title:string;

    @Prop()
    description:string;

    @Prop()
    duration:number;
}

export const CertificationSchema = SchemaFactory.createForClass(Certification);