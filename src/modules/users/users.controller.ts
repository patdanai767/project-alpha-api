import { Controller, Get, Post, Body, Param, Req, HttpStatus, UseGuards, Request, Delete, Patch } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dtos/create-users.dto';
import { AuthenticatedRequest } from '../auth/interfaces/authenticated-request.interface';
import { UserResponseDto } from './dtos/response-users.dto';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/commons/guards/jwt.guard';
import { RoleGuard } from '../auth/commons/guards/role.guard';
import { Roles } from '../auth/commons/decorators/roles.decorator';
import { UserRole } from 'src/shared/enums/roles.enums';
import { UpdateUserDto } from './dtos/update-users.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(JwtAuthGuard,RoleGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  async getUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('/profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiResponse({
      status: HttpStatus.OK,
      type:UserResponseDto,
      description:'Get user profile'
  })
  async getProfile(
    @Request() req: AuthenticatedRequest,
  ): Promise<UserResponseDto> {
    const user = await this.userService.getProfile(req.user._id);
    return user;
  }

  @Delete('/:id')
  @UseGuards(JwtAuthGuard,RoleGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  async deleteUser(@Param('id') userId:string):Promise<User>{
    return await this.userService.deleteUserById(userId);
  }

  @Patch('/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async updateUser(@Param('id') userId:string, @Body() dataUpdate:UpdateUserDto):Promise<User>{
    return await this.userService.patchUserById(userId,dataUpdate);
  }

}
