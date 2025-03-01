import {
  Controller,
  Get,
  Body,
  Param,
  UseGuards,
  Request,
  Delete,
  Patch,
} from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './schemas/user.schema';
import { AuthenticatedRequest } from '../auth/interfaces/authenticated-request.interface';
import { UserResponseDto } from './dtos/response-users.dto';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/commons/guards/jwt.guard';
import { RoleGuard } from '../auth/commons/guards/role.guard';
import { Roles } from '../auth/commons/decorators/roles.decorator';
import { UserRole } from 'src/shared/enums/roles.enums';
import { UpdateUserDto } from './dtos/update-users.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  async getUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('/profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({
    type: UserResponseDto,
  })
  async getProfile(
    @Request() req: AuthenticatedRequest,
  ): Promise<UserResponseDto> {
    return await this.userService.getProfile(req.user._id);
  }

  @Delete('/:id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  async deleteUser(@Param('id') userId: string): Promise<User> {
    return await this.userService.deleteUserById(userId);
  }

  @Patch('/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async updateUser(
    @Param('id') userId: string,
    @Body() dataUpdate: UpdateUserDto,
  ): Promise<User> {
    return await this.userService.patchUserById(userId, dataUpdate);
  }

  // @Patch('/profile/resume')
  // @UseGuards(JwtAuthGuard)
  // @ApiBearerAuth()
  // async updateResumeByUserId(
  //   @Request() req: AuthenticatedRequest,
  //   @Body() CreateResumeDto: CreateResumeDto,
  // ): Promise<User> {
  //   //fix AuthenticatedRequest
  //   const ExistResume = await this.resumeService.findById(req.user._id);
  //   if (!ExistResume) {
  //     const createResume =
  //       await this.resumeService.createResume(CreateResumeDto);
  //     const ResumeFind = await this.resumeService.findById(createResume._id);
  //     return await this.userService.updateResumeByUser(
  //       req.user._id,
  //       ResumeFind._id,
  //     );
  //   }
  //   const ResumeFind = await this.resumeService.findById(ExistResume._id);
  //   return await this.userService.updateResumeByUser(
  //     req.user._id,
  //     ResumeFind._id,
  //   );
  // }
}
