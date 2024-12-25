import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { EducationService } from './education.service';
import { Education } from './schemas/education.schema';
import { JwtAuthGuard } from '../auth/commons/guards/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('education')
export class EducationController {
    constructor(private readonly educationService:EducationService) {}

    @Get()
    async getEducations():Promise<Education[]>{
        return await this.educationService.findAll();
    }

    @Delete('/:id')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    async deleteEdc(@Param('id') edcId:string):Promise<Education>{
        return await this.educationService.deleteEdc(edcId)
    }
}
