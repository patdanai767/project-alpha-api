import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { MeetingDocument } from './schemas/meeting.schema';
import { Roles } from '../auth/commons/decorators/roles.decorator';
import { UserRole } from 'src/shared/enums/roles.enums';
import { JwtAuthGuard } from '../auth/commons/guards/jwt.guard';
import { RoleGuard } from '../auth/commons/guards/role.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CreateMeetingDto } from './dtos/create-meeting.dto';
import { AuthenticatedRequest } from '../auth/interfaces/authenticated-request.interface';
import { UpdateMeetingDto } from './dtos/update-meeting.dto';

@Controller('meeting')
export class MeetingController {
  constructor(private readonly meetingService: MeetingService) {}

  @Get()
  async getMeetings(): Promise<MeetingDocument[]> {
    return await this.meetingService.find();
  }

  @Get('/myMeeting')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ApiBearerAuth()
  async getMyMeetings(
    @Request() req: AuthenticatedRequest,
  ): Promise<MeetingDocument[]> {
    return await this.meetingService.findMyMeeting(req.user._id);
  }

  @Get('/:id')
  async getMeeting(@Param('id') id: string): Promise<MeetingDocument> {
    return await this.meetingService.findOne({ _id: id });
  }

  @Post()
  @Roles(UserRole.TRAINER, UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ApiBearerAuth()
  async createMeeting(
    @Body() createMeetingDto: CreateMeetingDto,
    @Request() req: AuthenticatedRequest,
  ) {
    return await this.meetingService.create(createMeetingDto, req.user._id);
  }

  @Patch('/:id')
  @Roles(UserRole.TRAINER, UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ApiBearerAuth()
  async updateMeeting(
    @Body() updateMeetingDto: UpdateMeetingDto,
    @Param('id') id: string,
  ): Promise<MeetingDocument> {
    return await this.meetingService.updataCourseById(id, updateMeetingDto);
  }

  @Delete('/:id')
  @Roles(UserRole.TRAINER, UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ApiBearerAuth()
  async deleteMeeting(@Param('id') id: string): Promise<MeetingDocument> {
    return await this.meetingService.deleteCourseById(id);
  }
}
