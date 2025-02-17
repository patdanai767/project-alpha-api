import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Conversation,
  ConversationDocument,
} from './schemas/conversation.schema';
import { Model } from 'mongoose';
import { CreateConversationDto } from './dtos/create-conversation.dto';
import { UpdateConversationDto } from './dtos/update-conversation.dto';

@Injectable()
export class ConversationService {
  constructor(
    @InjectModel(Conversation.name)
    private ConversationModel: Model<Conversation>,
  ) {}

  async findAll(): Promise<ConversationDocument[]> {
    return await this.ConversationModel.find();
  }

  async findById(id: string): Promise<ConversationDocument> {
    return await this.ConversationModel.findById(id);
  }

  async findMyAll(id: string): Promise<ConversationDocument[]> {
    return await this.ConversationModel.find({
      $or: [{ sentToId: id }, { sentFromId: id }],
    });
  }

  async createConversation(
    CreateConversationDto: CreateConversationDto,
    sentFromId: string,
  ): Promise<ConversationDocument> {
    return await this.ConversationModel.create({
      sentFromId: sentFromId,
      ...CreateConversationDto,
    });
  }

  async updateConversation(
    id: string,
    UpdateConversationDto: UpdateConversationDto,
  ): Promise<ConversationDocument> {
    return await this.ConversationModel.findByIdAndUpdate(
      id,
      UpdateConversationDto,
      { new: true },
    );
  }

  async deleteConversation(id: string): Promise<ConversationDocument> {
    return await this.ConversationModel.findByIdAndDelete(id);
  }
}
