import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Notification } from './schemas/notification.schema';
import { Model } from 'mongoose';
import { CreateNotificationDto } from './dtos/create-notification.dto';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification.name)
    private NotificationModel: Model<Notification>,
  ) {}

  async findAll(): Promise<Notification[]> {
    return await this.NotificationModel.find();
  }

//   async createNotification(CreateNotificationDto:CreateNotificationDto):Promise<Notification>{
//     return
//   }

  async deleteNotification(id: string): Promise<Notification> {
    return await this.NotificationModel.findByIdAndDelete(id);
  }
}
