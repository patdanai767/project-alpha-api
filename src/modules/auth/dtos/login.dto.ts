import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'patlala@gmail.com',
    description: 'Email user',
    type: String,
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'P@ssw0rd!',
    description: 'Password user',
    type: String,
    required: true,
  })
  @IsStrongPassword()
  @IsNotEmpty()
  password: string;
}
