import { UserRole } from 'src/shared/enums/roles.enums';
export declare class UpdateUserDto {
    username?: string;
    email?: string;
    fullname?: string;
    role?: UserRole;
}
