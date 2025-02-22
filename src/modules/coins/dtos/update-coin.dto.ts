import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, Min } from 'class-validator';

export class UpdateCoinDto {
  @ApiPropertyOptional({
    type: Number,
  })
  @IsNumber()
  @Min(0)
  @IsOptional()
  currentCoin?: number;
}
