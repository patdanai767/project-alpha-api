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
import {
  Conversation,
  ConversationDocument,
} from './schemas/conversation.schema';
import { CreateConversationDto } from './dtos/create-conversation.dto';
import { JwtAuthGuard } from '../auth/commons/guards/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthenticatedRequest } from '../auth/interfaces/authenticated-request.interface';
import { UpdateConversationDto } from './dtos/update-conversation.dto';

@Controller('conversation')
export class ConversationController {
  constructor(private readonly ConversationService: ConversationService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async getConversations(): Promise<Conversation[]> {
    return await this.ConversationService.findAll();
  }

  @Get('/myMessage')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async myConversations(
    @Request() req: AuthenticatedRequest,
  ): Promise<ConversationDocument[]> {
    return await this.ConversationService.findMyAll(req.user._id);
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async getConversation(@Param('id') id: string): Promise<Conversation> {
    return await this.ConversationService.findById(id);
  }

  @Post('/sentMessage')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async PostConversation(
    @Body() CreateConversationDto: CreateConversationDto,
    @Request() req: AuthenticatedRequest,
  ): Promise<Conversation> {
    return await this.ConversationService.createConversation(
      CreateConversationDto,
      req.user._id,
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
