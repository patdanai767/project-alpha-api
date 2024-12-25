import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsStrongPassword,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import mongoose from 'mongoose';
import { ResumeDocument } from 'src/modules/resume/schemas/resume.schema';
import { UserRole } from 'src/shared/enums/roles.enums';

export class CreateUserDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  fullname: string;

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    type: String,
  })
  @IsStrongPassword()
  @IsNotEmpty()
  password: string;

  role?: UserRole;

  sex?: string;

  bio?: string;

  profileImage?: string;

  resume?: ResumeDocument;
}
