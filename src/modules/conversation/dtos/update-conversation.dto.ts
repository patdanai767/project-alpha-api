import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { Url } from 'url';

export class UpdateConversationDto {
  @ApiPropertyOptional({
    type: String,
  })
  content?: string;

  @ApiPropertyOptional()
  sentFromId?: string;

  @ApiPropertyOptional()
  sentToId?: string;

  @IsOptional()
  @ApiPropertyOptional({
    type: String,
  })
  mediaURL?: Url;
}
