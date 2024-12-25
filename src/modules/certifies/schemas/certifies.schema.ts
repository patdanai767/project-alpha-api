import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CertificationDocument = HydratedDocument<Certification>;

@Schema()
export class Certification {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  duration: string;
}

export const CertificationSchema = SchemaFactory.createForClass(Certification);
