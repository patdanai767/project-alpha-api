import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Url } from 'url';

export class CreateConversationDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  content: string;

  @ApiProperty({
    type:String
  })
  @IsMongoId()
  sentToId: string;

  @IsOptional()
  @ApiPropertyOptional({
    type: String,
  })
  mediaURL?: Url;
}
