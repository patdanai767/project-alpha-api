import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { meetingStatus } from 'src/shared/enums/meetingStatus.enums';

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
    description: "meeting's status",
    enum: meetingStatus,
    example: meetingStatus.Continue,
  })
  @IsEnum(meetingStatus)
  status?: meetingStatus;

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
