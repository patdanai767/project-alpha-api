import { ApiProperty } from '@nestjs/swagger';

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
  endAt: Date;
}
