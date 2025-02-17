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
import { WorkExpsService } from './work-exps.service';
import { WorkExperienceDocument } from './schemas/work-exp.schema';
import { JwtAuthGuard } from '../auth/commons/guards/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthenticatedRequest } from '../auth/interfaces/authenticated-request.interface';
import { CreateWorkExpDto } from './dtos/create-work-exp.dto';
import { UpdateWorkExpDto } from './dtos/update-work-exp.dto';

@Controller('work-exps')
export class WorkExpsController {
  constructor(private readonly workExpService: WorkExpsService) {}

  @Get()
  async getWorkExps(): Promise<WorkExperienceDocument[]> {
    return await this.workExpService.findAll();
  }

  @Get('/:id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string): Promise<WorkExperienceDocument> {
    return await this.workExpService.findOne(id);
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() createWorkExpDto: CreateWorkExpDto,
    @Request() req: AuthenticatedRequest,
  ): Promise<WorkExperienceDocument> {
    return await this.workExpService.create(createWorkExpDto, req.user._id);
  }

  @Patch('/:id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: string,
    @Body() updateWorkExpDto: UpdateWorkExpDto,
  ): Promise<WorkExperienceDocument> {
    return await this.workExpService.update(id, updateWorkExpDto);
  }

  @Delete('/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async deleteWorkExp(
    @Param('id') id: string,
  ): Promise<WorkExperienceDocument> {
    return await this.workExpService.deleteById(id);
  }
}
