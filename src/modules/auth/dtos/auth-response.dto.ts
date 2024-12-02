import { UserResponseDto } from "src/modules/users/dtos/response-users.dto";

export class AuthResponseDto {
    accessToken:string;

    // refreshToken:string;

    user:UserResponseDto;
}