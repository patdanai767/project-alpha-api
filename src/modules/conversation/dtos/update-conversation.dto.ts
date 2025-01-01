import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { Url } from 'url';

export class UpdateConversationDto {
  @ApiProperty({
    type: String,
  })
  _id?: string;

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  content?: string;

  @IsOptional()
  sentFromId?: string;

  @IsOptional()
  sentToId?: string;

  @IsOptional()
  @ApiProperty({
    type: String,
  })
  mediaURL?: Url;
}
