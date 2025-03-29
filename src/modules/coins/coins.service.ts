import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Coin, CoinDocument } from './schemas/coin.schema';
import { Model, QueryOptions, RootFilterQuery, Types } from 'mongoose';
import { CreateCoinDto } from './dtos/create-coin.dto';
import { UserService } from '../users/users.service';
import { UpdateCoinDto } from './dtos/update-coin.dto';

@Injectable()
export class CoinsService {
  constructor(
    @InjectModel(Coin.name) private CoinModel: Model<Coin>,
    private userService: UserService,
  ) {}

  async findAll(): Promise<CoinDocument[]> {
    return await this.CoinModel.find();
  }

  async findOne(filter: RootFilterQuery<CoinDocument>): Promise<CoinDocument> {
    return await this.CoinModel.findOne(filter);
  }

  async findMyAll(id: string): Promise<CoinDocument[]> {
    const user = await this.userService.findById(id);
    return await this.CoinModel.find({ user: user._id });
  }

  async create(
    userId: string,
    createCoinDto: CreateCoinDto,
  ): Promise<CoinDocument> {
    const user = await this.userService.findById(userId);
    if (createCoinDto.status === 'add') {
      if (createCoinDto.userId) {
        const userExist = await this.userService.findById(createCoinDto.userId);
        await this.userService.updateCoinById(createCoinDto.userId, {
          $inc: { coin: createCoinDto.coin },
        });
        return await this.CoinModel.create({
          user: createCoinDto.userId,
          currentCoin: userExist.coin + createCoinDto.coin,
          ...createCoinDto,
        });
      }
      await this.userService.updateCoinById(userId, {
        $inc: { coin: createCoinDto.coin },
      });
      return await this.CoinModel.create({
        user: userId,
        currentCoin: user.coin + createCoinDto.coin,
        ...createCoinDto,
      });
    } else if (
      createCoinDto.status === 'remove' &&
      user.coin - createCoinDto.coin > 0
    ) {
      await this.userService.updateCoinById(userId, {
        $inc: { coin: -createCoinDto.coin },
      });
      return await this.CoinModel.create({
        user: userId,
        currentCoin: user.coin - createCoinDto.coin,
        ...createCoinDto,
      });
    }
  }

  async update(
    id: string,
    updateCoinDto: UpdateCoinDto,
    options: QueryOptions<CoinDocument>,
  ): Promise<CoinDocument> {
    return await this.CoinModel.findOneAndUpdate(
      { _id: id },
      updateCoinDto,
      options,
    );
  }
}
