import { Controller,Get,Post,Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dtos/create-users.dto';

@Controller('users')
export class UsersController {
 constructor(private readonly usersService: UsersService){}

 @Get()
 async getUsers(): Promise<User[]>{
    return this.usersService.findAll()
 }

 @Post()
 async createUser(
   @Body() CreateUserDto: CreateUserDto
 ): Promise<User>{
   return this.usersService.createUser(CreateUserDto)
 }
}
