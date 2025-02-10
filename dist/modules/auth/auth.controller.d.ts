import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { AuthResponseDto } from './dtos/auth-response.dto';
import { RegisterDto } from './dtos/register.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(LoginDto: LoginDto): Promise<AuthResponseDto>;
    register(RegisterDto: RegisterDto): Promise<AuthResponseDto>;
}
