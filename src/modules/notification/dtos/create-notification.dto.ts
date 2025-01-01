import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateNotificationDto {
  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  content: string;

  @ApiProperty({
    type: String,
  })
  userId: string;
}
