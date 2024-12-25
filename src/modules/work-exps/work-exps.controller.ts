import { Body, Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { WorkExpsService } from './work-exps.service';
import { WorkExp } from './schemas/work-exp.schema';
import { JwtAuthGuard } from '../auth/commons/guards/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('work-exps')
export class WorkExpsController {
  constructor(private readonly workExpService: WorkExpsService) {}

  @Get()
  async getWorkExps(): Promise<WorkExp[]> {
    return await this.workExpService.findAll();
  } 

  @Delete('/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async deleteWorkExp(@Param('id') id: string): Promise<WorkExp> {
    return await this.workExpService.deleteById(id);
  }
}
