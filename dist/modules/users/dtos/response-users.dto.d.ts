import { UserRole } from "src/shared/enums/roles.enums";
export declare class UserResponseDto {
    _id: string;
    username: string;
    email: string;
    fullname: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
}
