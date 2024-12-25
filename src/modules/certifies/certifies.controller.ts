import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { CertifiesService } from './certifies.service';
import { Certification } from './schemas/certifies.schema';
import { JwtAuthGuard } from '../auth/commons/guards/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('certifies')
export class CertifiesController {
  constructor(private readonly certificationService: CertifiesService) {}

  @Get()
  async getCertifies(): Promise<Certification[]> {
    return await this.certificationService.findAll();
  }

  @Delete('/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async deleteCertify(@Param('id') certifyId: string): Promise<Certification> {
    return await this.certificationService.deleteCertify(certifyId);
  }
}
