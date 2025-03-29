import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/modules/users/users.service';
import { AuthResponseDto } from './dtos/auth-response.dto';
import { RegisterDto } from './dtos/register.dto';
import { LoginDto } from './dtos/login.dto';
import { JwtInterface } from './interfaces/jwt-payload.interface';
import { CourseService } from '../courses/courses.service';
import { hash,verify } from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private courseService: CourseService,
  ) {}

  async login(LoginDto: LoginDto): Promise<AuthResponseDto> {
    const existsUser = await this.userService.getUserByEmail(LoginDto.email);
    if (!existsUser) {
      throw new NotFoundException();
    }
    const isPasswordValid = await verify(existsUser.password, LoginDto.password);
    if (isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const accessToken = await this.generateAccessToken(existsUser._id);
    const { password, ...user } = existsUser;
    return { accessToken, user };
  }

  async register(RegisterDto: RegisterDto): Promise<AuthResponseDto> {
    const existEmail = await this.userService.getUserByEmail(RegisterDto.email);
    if (existEmail) {
      throw new ConflictException('Email already exists');
    }
    const existUsername = await this.userService.getUserByUsername(
      RegisterDto.username,
    );
    if (existUsername) {
      throw new ConflictException('Username already exists');
    }
    const registerHashDto = {
      ...RegisterDto,
      password: await hash(RegisterDto.password),
    }
    const user = await this.userService.createUser(registerHashDto);

    const accessToken = await this.generateAccessToken(user._id);

    if (RegisterDto.role === 'trainer') {
      await this.courseService.createCourse(
        { title: user.fullname, status: 'draft' },
        user._id,
      );
    }

    return { user, accessToken };
  }

  private generateAccessToken(userId: string): Promise<string> {
    const payload: JwtInterface = { sub: userId };
    return this.jwtService.signAsync(payload);
  }
}
