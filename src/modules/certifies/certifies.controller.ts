import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CertifiesService } from './certifies.service';
import {
  CertificationDocument,
} from './schemas/certifies.schema';
import { JwtAuthGuard } from '../auth/commons/guards/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthenticatedRequest } from '../auth/interfaces/authenticated-request.interface';
import { UpdateCertifyDto } from './dtos/update-cretifies.dto';
import { CreateCertifyDto } from './dtos/create-certifies.dto';

@Controller('certifies')
export class CertifiesController {
  constructor(private readonly certificationService: CertifiesService) {}

  @Get()
  async getCertifies(): Promise<CertificationDocument[]> {
    return await this.certificationService.findAll();
  }

  @Get('/:id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string): Promise<CertificationDocument> {
    return await this.certificationService.findOne(id);
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() createCertifyDto: CreateCertifyDto,
    @Request() req: AuthenticatedRequest,
  ): Promise<CertificationDocument> {
    return await this.certificationService.create(
      createCertifyDto,
      req.user._id,
    );
  }

  @Patch('/:id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: string,
    @Body() updateCertifyDto: UpdateCertifyDto,
  ): Promise<CertificationDocument> {
    return await this.certificationService.update(id, updateCertifyDto);
  }

  @Delete('/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async deleteCertify(
    @Param('id') certifyId: string,
  ): Promise<CertificationDocument> {
    return await this.certificationService.deleteCertify(certifyId);
  }
}
