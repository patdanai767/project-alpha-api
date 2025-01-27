import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsStrongPassword,
  IsNotEmpty,
  IsString,
  IsOptional,
} from 'class-validator';
import { UserRole } from 'src/shared/enums/roles.enums';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    example:"pat"
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    type: String,
    example:"patpat"
  })
  @IsString()
  @IsNotEmpty()
  fullname: string;

  @ApiProperty({
    type: String,
    example:"patprc@gmail.com"
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    type: String,
    example:"P@ssw0rd!"
  })
  @IsStrongPassword()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    type:String,
    example:"trainee"
  })
  @IsOptional()
  role?: UserRole;

  @IsOptional()
  sex?: string;

  @IsOptional()
  bio?: string;

  @IsOptional()
  profileImage?: string;

  @IsOptional()
  resume?: string;
}
