import { Module } from '@nestjs/common';
import { CertifiesService } from './certifies.service';
import { CertifiesController } from './certifies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Certification, CertificationSchema } from './schemas/certifies.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Certification.name, schema: CertificationSchema },
    ]),
  ],
  providers: [CertifiesService],
  controllers: [CertifiesController],
})
export class CertifiesModule {}
