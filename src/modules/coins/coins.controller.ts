import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CoinsService } from './coins.service';
import { CoinDocument } from './schemas/coin.schema';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/commons/guards/jwt.guard';
import { CreateCoinDto } from './dtos/create-coin.dto';
import { AuthenticatedRequest } from '../auth/interfaces/authenticated-request.interface';

@Controller('coins')
@ApiBearerAuth()
export class CoinsController {
  constructor(private readonly coinService: CoinsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getCoins(): Promise<CoinDocument[]> {
    return await this.coinService.findAll();
  }

  @Get('/myCoins')
  @UseGuards(JwtAuthGuard)
  async myCoins(@Request() req: AuthenticatedRequest): Promise<CoinDocument[]> {
    return await this.coinService.findMyAll(req.user._id);
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  async getCoin(@Param('id') coinId: string): Promise<CoinDocument> {
    return await this.coinService.findOne({ _id: coinId });
  }


  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() createCoinDto: CreateCoinDto,
    @Request() req: AuthenticatedRequest,
  ): Promise<CoinDocument> {
    return await this.coinService.create(req.user._id, createCoinDto);
  }
}
