import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Meeting, MeetingDocument } from './schemas/meeting.schema';
import { Model, RootFilterQuery } from 'mongoose';
import { CreateMeetingDto } from './dtos/create-meeting.dto';
import { UpdateMeetingDto } from './dtos/update-meeting.dto';
import { User } from '../users/schemas/user.schema';

@Injectable()
export class MeetingService {
  constructor(
    @InjectModel(Meeting.name) private MeetingModel: Model<Meeting>,
  ) {}

  async find(): Promise<MeetingDocument[]> {
    return await this.MeetingModel.find();
  }

  async findMyMeeting(id: string): Promise<MeetingDocument[]> {
    return await this.MeetingModel.find({
      $or: [{ createdBy: id }, { trainee: id }],
    });
  }

  async findOne(
    filter: RootFilterQuery<MeetingDocument>,
  ): Promise<MeetingDocument> {
    return await this.MeetingModel.findOne(filter);
  }

  async create(
    createMeetingDto: CreateMeetingDto,
    userId: string,
  ): Promise<MeetingDocument> {
    return await this.MeetingModel.create({
      createdBy: userId,
      ...createMeetingDto,
    });
  }

  async updataCourseById(
    id: string,
    UpdateCourseDto: UpdateMeetingDto,
  ): Promise<MeetingDocument> {
    return await this.MeetingModel.findByIdAndUpdate(id, UpdateCourseDto, {
      new: true,
    });
  }

  async deleteCourseById(id: string): Promise<MeetingDocument> {
    return await this.MeetingModel.findByIdAndDelete(id);
  }
}
