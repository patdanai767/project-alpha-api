import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateMeetingDto {
  @ApiPropertyOptional({
    type: String,
    description: 'title',
  })
  @IsOptional()
  title?: string;

  @ApiPropertyOptional({
    type: String,
    description: 'description',
  })
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({
    type: String,
    description: 'StartedAt date',
  })
  @IsOptional()
  startedAt?: Date;

  @ApiPropertyOptional({
    type: String,
    description: 'EndAt date',
  })
  @IsOptional()
  endAt?: Date;
}
