import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/modules/users/users.service';
import { AuthResponseDto } from './dtos/auth-response.dto';
import { RegisterDto } from './dtos/register.dto';
import { LoginDto } from './dtos/login.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(LoginDto: LoginDto): Promise<AuthResponseDto>;
    register(RegisterDto: RegisterDto): Promise<AuthResponseDto>;
    private generateAccessToken;
}
