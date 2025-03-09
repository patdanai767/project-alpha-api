import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRatingDto {
  @IsString()
  @IsNotEmpty()
  createdBy: string;

  @IsNumber()
  @IsNotEmpty()
  point: number;

  @IsString()
  @IsNotEmpty()
  description: string;
}
