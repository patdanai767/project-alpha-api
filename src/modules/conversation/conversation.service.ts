import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Conversation } from './schemas/conversation.schema';
import { Model } from 'mongoose';
import { CreateConversationDto } from './dtos/create-conversation.dto';
import { UpdateConversationDto } from './dtos/update-conversation.dto';
import { User } from '../users/schemas/user.schema';
import { UserService } from '../users/users.service';

@Injectable()
export class ConversationService {
  constructor(
    @InjectModel(Conversation.name)
    private ConversationModel: Model<Conversation>,
    private userService: UserService,
  ) {}

  async findAll(): Promise<Conversation[]> {
    return await this.ConversationModel.find();
  }

  async findById(id: string): Promise<Conversation> {
    return await this.ConversationModel.findById(id);
  }

  async createConversation(
    CreateConversationDto: CreateConversationDto,
    sentFromId: string,
    sentToId: string,
  ): Promise<Conversation> {
    return await this.ConversationModel.create({
      sentFromId: sentFromId,
      sentToId: sentToId,
      ...CreateConversationDto,
    });
  }

  async updateConversation(
    id: string,
    UpdateConversationDto: UpdateConversationDto,
  ): Promise<Conversation> {
    return await this.ConversationModel.findByIdAndUpdate(
      id,
      UpdateConversationDto,
      { new: true },
    );
  }

  async deleteConversation(id: string): Promise<Conversation> {
    return await this.ConversationModel.findByIdAndDelete(id);
  }
}
