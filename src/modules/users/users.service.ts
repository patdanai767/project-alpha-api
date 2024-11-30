import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dtos/create-users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    const getUsers = await this.userModel.find();
    return getUsers;
  }

  async createUser(CreateUserDto: CreateUserDto): Promise<User> {
    const createUser = new this.userModel(CreateUserDto);
    return createUser.save();
  }

//   async findOne(): Promise<User> {
//     return await this.userModel.find(user => user.username === username);
//   }
}
