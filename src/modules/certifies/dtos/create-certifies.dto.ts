import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCertifyDto {
  @ApiPropertyOptional({
    example: 'Personal trainer in KMITL Gym',
    type: String,
  })
  title?: string;

  @ApiPropertyOptional({
    example:
      'This certifies that me has successfully demonstrated and understanding',
    type: String,
  })
  description?: string;

  @ApiPropertyOptional({
    example: 'period',
    type: String,
  })
  duration?: string;
}
