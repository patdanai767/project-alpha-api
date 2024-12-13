import { Request } from "express";
import { UserResponseDto } from "src/modules/users/dtos/response-users.dto";

export interface AuthenticatedRequest extends Request {
    user: UserResponseDto
}