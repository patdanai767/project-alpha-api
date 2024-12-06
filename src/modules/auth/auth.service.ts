import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/modules/users/users.service';
import { JwtPayloadDto } from './dtos/jwt-payload.dto';
import { AuthResponseDto } from './dtos/auth-response.dto';
import { RegisterDto } from './dtos/register.dto';
import { CreateUserDto } from '../users/dtos/create-users.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, pwd: string): Promise<AuthResponseDto> {
    const user = await this.userService.findOneWithEmail(email);
    if (user?.password !== pwd) {
      throw new UnauthorizedException();
    }
    const accessToken = await this.generateAccessToken({
      id: user._id,
      resume_id: user.resume_id,
      username: user.username,
      fullname: user.fullname,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage,
      ranking: user.ranking,
      role: user.role,
    });

    return { accessToken, user };
  }

  // async register(CreateUserDto:CreateUserDto): Promise<RegisterDto>{
  //   const accessToken = await this.generateAccessToken()
  // }

  private generateAccessToken(payload: JwtPayloadDto) {
    return this.jwtService.signAsync(payload);
  }
}
