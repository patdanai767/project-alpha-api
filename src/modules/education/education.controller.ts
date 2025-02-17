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
import { EducationService } from './education.service';
import { Education, EducationDocument } from './schemas/education.schema';
import { JwtAuthGuard } from '../auth/commons/guards/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CreateEducationDto } from './dtos/create-education.dto';
import { AuthenticatedRequest } from '../auth/interfaces/authenticated-request.interface';
import { UpdateEducationDto } from './dtos/update-education.dto';

@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Get()
  async getEducations(): Promise<Education[]> {
    return await this.educationService.findAll();
  }

  @Get('/:id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string): Promise<EducationDocument> {
    return await this.educationService.findOne(id);
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() CreateEducationDto: CreateEducationDto,
    @Request() req: AuthenticatedRequest,
  ): Promise<EducationDocument> {
    return await this.educationService.create(CreateEducationDto, req.user._id);
  }

  @Patch('/:id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: string,
    @Body() updateEducationDto: UpdateEducationDto,
  ): Promise<EducationDocument> {
    return await this.educationService.update(id, updateEducationDto);
  }

  @Delete('/:id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async deleteEdc(@Param('id') edcId: string): Promise<Education> {
    return await this.educationService.deleteEdc(edcId);
  }
}
