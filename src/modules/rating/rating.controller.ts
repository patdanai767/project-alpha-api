import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { RatingService } from './rating.service';
import { Rating } from './schemas/rating.schema';
import { JwtAuthGuard } from '../auth/commons/guards/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CreateRatingDto } from './dtos/create-rating.dto';
import { AuthenticatedRequest } from '../auth/interfaces/authenticated-request.interface';

@Controller('rating')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @Get()
  async getRatings(): Promise<Rating[]> {
    return this.ratingService.findAll();
  }

  @Post('/:courseId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async createRating(
    @Body() CreateRatingDto: CreateRatingDto,
    @Request() req: AuthenticatedRequest,
    @Param('id') courseId:string
  ): Promise<Rating> {
    return this.ratingService.createRating(CreateRatingDto, req.user._id, courseId);
  }

  @Delete('/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async deleteRating(@Param('id') id: string): Promise<Rating> {
    return this.ratingService.deleteRatingById(id);
  }
}
