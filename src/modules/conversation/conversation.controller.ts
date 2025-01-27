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
import { ConversationService } from './conversation.service';
import { Conversation } from './schemas/conversation.schema';
import { CreateConversationDto } from './dtos/create-conversation.dto';
import { JwtAuthGuard } from '../auth/commons/guards/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthenticatedRequest } from '../auth/interfaces/authenticated-request.interface';
import { UpdateConversationDto } from './dtos/update-conversation.dto';
import { UserService } from '../users/users.service';

@Controller('conversation')
export class ConversationController {
  constructor(
    private readonly ConversationService: ConversationService,
    private readonly UserService: UserService,
  ) {}

  @Get()
  async getConversations(): Promise<Conversation[]> {
    return await this.ConversationService.findAll();
  }

  @Get('/:id')
  async getConversation(@Param('id') id: string): Promise<Conversation> {
    return await this.ConversationService.findById(id);
  }

  @Post('/sentMessage/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async PostConversation(
    @Param('id') sentToId: string,
    @Body() CreateConversationDto: CreateConversationDto,
    @Request() req: AuthenticatedRequest,
  ): Promise<Conversation> {
    return await this.ConversationService.createConversation(
      CreateConversationDto,
      req.user._id,
      sentToId,
    );
  }

  @Patch('/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async ConnectConversation(
    @Param('id') id: string,
    @Body() UpdateConversationDto: UpdateConversationDto,
  ): Promise<Conversation> {
    return await this.ConversationService.updateConversation(
      id,
      UpdateConversationDto,
    );
  }

  @Delete('/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async DeleteConversation(@Param('id') id: string): Promise<Conversation> {
    return await this.ConversationService.deleteConversation(id);
  }
}
