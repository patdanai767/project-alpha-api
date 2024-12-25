import { ApiProperty } from '@nestjs/swagger';

export class CreateCertifyDto {
  @ApiProperty({
    example: 'Personal trainer in KMITL Gym',
    type: String,
  })
  title: string;

  @ApiProperty({
    example:
      'This certifies that me has successfully demonstrated and understanding',
    type: String,
  })
  description: string;

  @ApiProperty({
    example: 'period',
    type: String,
  })
  duration: string;
}
