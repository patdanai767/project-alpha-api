import { Controller, Get, Post, Body, Param, Req, HttpStatus } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dtos/create-users.dto';
import { AuthenticatedRequest } from '../auth/interfaces/authenticated-request.interface';
import { UserResponseDto } from './dtos/response-users.dto';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(`/:id`)
  async getUser(@Param('id') userId: string): Promise<User> {
    return this.userService.findOne(userId);
  }

  @Post()
  async createUser(@Body() CreateUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(CreateUserDto);
  }

  @Get('/profile')
  @ApiBearerAuth()
  @ApiResponse({
      status: HttpStatus.OK,
      type:UserResponseDto,
      description:'Get user profile'
  })
  async getProfile(
    @Req() request: AuthenticatedRequest,
  ): Promise<UserResponseDto> {
    const user = await this.userService.findOne(request.user.id);
    return user;
  }
}
