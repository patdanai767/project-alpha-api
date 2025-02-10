import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dtos/create-users.dto';
import { UpdateUserDto } from './dtos/update-users.dto';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<User>);
    findAll(): Promise<User[]>;
    createUser(CreateUserDto: CreateUserDto): Promise<User>;
    getUserByUsername(username: string): Promise<User>;
    getProfile(userId: string): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
    deleteUserById(userId: string): Promise<User>;
    patchUserById(userId: string, dataUpdate: UpdateUserDto): Promise<User>;
}
