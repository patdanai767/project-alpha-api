import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRatingDto {
  @IsString()
  @IsNotEmpty()
  course_id:string;

  @IsString()
  @IsNotEmpty()
  user_id: string;

  @IsNumber()
  @IsNotEmpty()
  point: number;

  @IsString()
  @IsNotEmpty()
  description: string;
}
