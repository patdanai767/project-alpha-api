import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { CreateCertifyDto } from 'src/modules/certifies/dtos/create-certifies.dto';
import { CreateEducationDto } from 'src/modules/education/dtos/create-education.dto';
import { CreateWorkExpDto } from 'src/modules/work-exps/dtos/create-work-exp.dto';

export class CreateResumeDto {
  _id?: string;

  @ApiProperty({
    type: CreateCertifyDto,
  })
  @IsOptional()
  certification?: CreateCertifyDto;

  @ApiProperty({
    type: CreateEducationDto,
  })
  @IsOptional()
  education?: CreateEducationDto;

  @ApiProperty({
    type: CreateWorkExpDto,
  })
  @IsOptional()
  workExp?: CreateWorkExpDto;
}
