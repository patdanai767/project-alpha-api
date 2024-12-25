import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ResumeService } from './resume.service';
import { Resume } from './schemas/resume.schema';
import { CreateResumeDto } from './dtos/create-resume.dto';
import { JwtAuthGuard } from '../auth/commons/guards/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { RoleGuard } from '../auth/commons/guards/role.guard';
import { Roles } from '../auth/commons/decorators/roles.decorator';
import { UserRole } from 'src/shared/enums/roles.enums';

@Controller('resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Get()
  async getResumes(): Promise<Resume[]> {
    return await this.resumeService.findAll();
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async getResume(@Param('id') id: string): Promise<Resume> {
    return await this.resumeService.findById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async createResume(
    @Body() CreateResumeDto: CreateResumeDto,
  ): Promise<Resume> {
    return await this.resumeService.createResume(CreateResumeDto);
  }

  @Delete()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  async deleteResume(@Param('id') id: string): Promise<Resume> {
    return await this.resumeService.deleteResume(id);
  }
}
