import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/modules/users/dtos/create-users.dto';
import { User } from 'src/modules/users/schemas/user.schema';
import { UsersService } from 'src/modules/users/users.service';

@Injectable()
export class AuthService {
    // constructor(private usersService: UsersService){}
    // // async signIn(CreateUserDto:CreateUserDto):Promise<User>{
    // // }
}
