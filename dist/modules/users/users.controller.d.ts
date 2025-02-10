import { UserService } from './users.service';
import { User } from './schemas/user.schema';
import { AuthenticatedRequest } from '../auth/interfaces/authenticated-request.interface';
import { UserResponseDto } from './dtos/response-users.dto';
import { UpdateUserDto } from './dtos/update-users.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): Promise<User[]>;
    getProfile(req: AuthenticatedRequest): Promise<UserResponseDto>;
    deleteUser(userId: string): Promise<User>;
    updateUser(userId: string, dataUpdate: UpdateUserDto): Promise<User>;
}
