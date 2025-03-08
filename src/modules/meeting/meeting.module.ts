import { Module } from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { MeetingController } from './meeting.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Meeting, MeetingSchema } from './schemas/meeting.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Meeting.name, schema: MeetingSchema }]),
  ],
  providers: [MeetingService],
  controllers: [MeetingController],
  exports: [MeetingService],
})
export class MeetingModule {}
