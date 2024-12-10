import {
  Body,
  Controller,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiResponse } from '@nestjs/swagger';
import { LoginDto } from './dtos/login.dto';
import { AuthResponseDto } from './dtos/auth-response.dto';
import { RegisterDto } from './dtos/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiResponse({
    status: HttpStatus.OK,
    description:'Login already',
  })
  signIn(@Body() LoginDto: LoginDto):Promise<AuthResponseDto> {
    return this.authService.login(LoginDto);
  }

  @Post('register')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Register success',
  })
  register(@Body() RegisterDto:RegisterDto):Promise<AuthResponseDto>{
    return this.authService.register(RegisterDto);
  }
}
