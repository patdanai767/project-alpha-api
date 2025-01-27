import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { Url } from 'url';

export class CreateConversationDto {
  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  content: string;

  sentFromId?: string;

  sentToId?: string;

  @IsOptional()
  @ApiProperty({
    type: String,
  })
  mediaURL?: Url;
}
