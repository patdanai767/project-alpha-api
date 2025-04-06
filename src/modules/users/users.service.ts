import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model, QueryOptions } from 'mongoose';
import { CreateUserDto } from './dtos/create-users.dto';
import { UpdateUserDto } from './dtos/update-users.dto';

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

  async getUserByUsername(username: string): Promise<User> {
    return await this.userModel
      .findOne({ username: username })
      .lean<User>()
      .exec();
  }

  async getProfile(userId: string): Promise<User> {
    const user = await this.userModel.findById(userId).lean<User>().exec();
    return user;
  }

  async findById(id: string): Promise<User> {
    return await this.userModel.findById(id);
  }

  async getUserByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email: email }).lean<User>().exec();
  }

  async deleteUserById(userId: string): Promise<User> {
    return this.userModel.findByIdAndDelete(userId);
  }

  async patchUserById(
    userId: string,
    dataUpdate: UpdateUserDto,
  ): Promise<User> {
    return this.userModel.findByIdAndUpdate(userId, dataUpdate, { new: true });
  }

  async updateCoinById(
    userId: string,
    options: QueryOptions<UserDocument>,
  ): Promise<UserDocument> {
    return this.userModel.findByIdAndUpdate({ _id: userId }, options);
  }

  // async updateResumeByUser(userId: string, resumeId: string): Promise<User> {
  //   const FindResume = await this.resumeModel.findById(resumeId);
  //   return await this.userModel.findByIdAndUpdate(
  //     userId,
  //     { $push: { resume: FindResume } },
  //     { new: true },
  //   );
  // }
}
