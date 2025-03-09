import { ApiProperty } from '@nestjs/swagger';
import { meetingStatus } from 'src/shared/enums/meetingStatus.enums';

export class CreateMeetingDto {
  @ApiProperty({
    type: String,
    description: "meeting's title",
  })
  title: string;

  @ApiProperty({
    type: String,
    description: "meeting's description",
  })
  description?: string;

  @ApiProperty({
    type: String,
    description: "meeting's status",
    enum: meetingStatus,
    example: meetingStatus.Continue,
  })
  status: meetingStatus;

  @ApiProperty({
    type: String,
    description: 'trainee ID',
  })
  trainee: string;

  @ApiProperty({
    type: String,
    description: 'trainee ID',
    example: new Date(),
  })
  startedAt: Date;

  @ApiProperty({
    type: String,
    description: 'trainee ID',
    example: new Date(),
  })
  @ApiProperty({
    type: String,
    description: 'trainee ID',
    example: new Date(),
  })
  endAt: Date;
}
