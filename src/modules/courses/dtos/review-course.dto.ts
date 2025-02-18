import { ApiProperty } from '@nestjs/swagger';

export class ReviewCourseDto {
  @ApiProperty({
    type: Number,
    description: 'Course point',
  })
  point?: number;

  @ApiProperty({
    type: String,
    description: 'Course description',
  })
  description?: string;
}
