import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/modules/users/users.service';
import { AuthResponseDto } from './dtos/auth-response.dto';
import { RegisterDto } from './dtos/register.dto';
import { LoginDto } from './dtos/login.dto';
import { JwtInterface } from './interfaces/jwt-payload.interface'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(LoginDto:LoginDto): Promise<AuthResponseDto> {
    const existsUser = await this.userService.getUserByEmail(LoginDto.email);

    if (!(LoginDto.password === existsUser.password)) {
      throw new UnauthorizedException('Invalid password');
    }
    
    const accessToken = await this.generateAccessToken(existsUser._id.toString())
    const {password , ...user} = existsUser;
    return { accessToken, user };
  }

  async register(RegisterDto:RegisterDto): Promise<AuthResponseDto>{
    const existEmail = await this.userService.getUserByEmail(RegisterDto.email)
    const existUsername = await this.userService.getUserByUsername(RegisterDto.username)
    if(existEmail){
      throw new ConflictException('Email already exists');
    }
    if(existUsername){
      throw new ConflictException('Username already exists');
    }
    
    const user = await this.userService.createUser(RegisterDto);
    const accessToken = await this.generateAccessToken(user._id.toString());

    return {user,accessToken}
  }

  private generateAccessToken(userId: string):Promise<string> {
    const payload: JwtInterface = {sub: userId};
    return this.jwtService.signAsync(payload);
  }
}
