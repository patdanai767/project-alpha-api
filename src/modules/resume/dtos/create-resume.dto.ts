import { ApiProperty } from '@nestjs/swagger';
import { CreateCertifyDto } from 'src/modules/certifies/dtos/create-certifies.dto';
import { CreateEducationDto } from 'src/modules/education/dtos/create-education.dto';
import { CreateWorkExpDto } from 'src/modules/work-exps/dtos/create-work-exp.dto';

export class CreateResumeDto {
  _id: string;

  @ApiProperty({
    type: CreateCertifyDto,
  })
  certification?: CreateCertifyDto;

  @ApiProperty({
    type: CreateEducationDto,
  })
  education?: CreateEducationDto;

  @ApiProperty({
    type: CreateWorkExpDto,
  })
  workExp?: CreateWorkExpDto;
}
