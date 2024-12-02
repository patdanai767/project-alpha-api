import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dtos/create-users.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    const getUsers = await this.userModel.find();
    return getUsers;
  }

  async createUser(CreateUserDto: CreateUserDto): Promise<User> {
    const createUser = new this.userModel(CreateUserDto);
    return createUser.save();
  }

  async findOne(userId:string): Promise<User>{
    try {
      const getUser = await this.userModel.findById(userId).exec();
      return getUser;
    } catch (error) {
      throw new NotFoundException(`User #${userId} not found`)
    }
  }

  async findOneWithEmail(email:string): Promise<User>{
    try {
      const getUser = await this.userModel.findOne({email}).exec();
      return getUser;
    } catch (error) {
      throw new NotFoundException(`User #${email} not found`)
    }
  }
}
