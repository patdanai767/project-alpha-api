import { ApiProperty } from '@nestjs/swagger';

export class CreateEducationDto {
  @ApiProperty({
    example: 'KMITL',
    type: String,
  })
  placeEducated: string;

  @ApiProperty({
    example: '',
    type: String,
  })
  description: string;

  @ApiProperty({
    example: 'Period',
    type: String,
  })
  duration: string;
}
