import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateEducationDto {
  @ApiProperty({
    example: 'KMITL',
    type: String,
  })
  @IsString()
  placeEducated?: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  description?: string;

  @ApiProperty({
    example: 'Period',
    type: String,
  })
  @IsString()
  duration?: string;
}
