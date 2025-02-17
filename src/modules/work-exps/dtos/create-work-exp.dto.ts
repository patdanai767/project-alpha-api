import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateWorkExpDto {
  @ApiPropertyOptional({
    example: 'Personal trainer in KMITL Gym',
    type: String,
  })
  @IsString()
  title?: string;

  @ApiPropertyOptional({
    example:
      'This certifies that me has successfully demonstrated and understanding',
    type: String,
  })
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    example: 'period',
    type: String,
  })
  @IsString()
  duration?: string;
}
