import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { CourseStatus } from 'src/shared/enums/status.enums';

export class UpdateCourseDto {
  @IsMongoId()
  @ApiProperty({
    example: '',
    type: String,
    description: 'Course categoryId',
  })
  category?: string;

  @IsMongoId()
  @ApiProperty({
    example: '',
    type: String,
    description: 'Course ratingId',
  })
  rating?: string;

  @IsString()
  @ApiProperty({
    example: 'Building body for Arm-wrestling',
    type: String,
    description: 'Course Title',
  })
  title?: string;

  @IsString()
  @ApiProperty({
    example:
      'Arm-wrestling is one of the most powerful competetive in the world where is every single country want to compete how strong they are.',
    type: String,
    description: 'Course description',
  })
  description?: string;

  @IsNumber()
  @Type(() => Number)
  @ApiProperty({
    example: 800,
    type: Number,
    description: 'Course price',
  })
  price?: number;

  @IsNumber()
  @Type(() => Number)
  @ApiProperty({
    example: 30,
    type: Number,
    description: 'Course duration (day)',
  })
  duration?: number;

  @IsString()
  @ApiProperty({
    example: 'Thumbnail.jpg',
    type: String,
    description: 'Course thumbnail',
  })
  thumbnail?: string;

  @IsEnum(CourseStatus, {
    message: `Invalid Status. Status should be ${CourseStatus.DRAFT}, ${CourseStatus.AVAILABLE}, ${CourseStatus.UNAVAILABLE}`,
  })
  @IsString()
  @ApiProperty({
    example: CourseStatus.DRAFT,
    type: String,
    description: 'Course Status',
    enum: CourseStatus,
  })
  status?: string;
}
