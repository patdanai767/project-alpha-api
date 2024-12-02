import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dtos/create-users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(`/:id`)
  async getUser(@Param('id') userId: string): Promise<User> {
    return this.usersService.findOne(userId);
  }

  @Post()
  async createUser(@Body() CreateUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(CreateUserDto);
  }
}
