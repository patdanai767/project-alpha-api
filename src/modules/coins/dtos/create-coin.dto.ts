import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, Min } from 'class-validator';
import { StatusCoin } from 'src/shared/enums/coins.enums';

export class CreateCoinDto {
  @ApiProperty({
    type: Number,
    example: 10,
  })
  @IsNumber()
  @Min(0)
  coin: number;

  @ApiProperty({
    type: String,
    enum: StatusCoin,
    example: StatusCoin.Add,
  })
  status: StatusCoin;

  @ApiProperty({
    type: Number,
  })
  @IsNumber()
  @Min(0)
  @IsOptional()
  currentCoin?: number;
}
