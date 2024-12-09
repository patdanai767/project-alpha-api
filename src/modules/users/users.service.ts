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

  async getUserByUsername(username:string):Promise<User>{
    return this.userModel.findOne({username}).lean();
  }

  async getUserById(userId: string):Promise<User>{
    return this.userModel.findById(userId).lean()
  }

  async getUserByEmail(email:string): Promise<User>{
    try {
      const getUser = await this.userModel.findOne({email}).lean();
      return getUser;
    } catch (error) {
      throw new NotFoundException(`User #${email} not found`)
    }
  }
}
