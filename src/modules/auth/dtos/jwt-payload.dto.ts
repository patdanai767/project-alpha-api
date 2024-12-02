export class JwtPayloadDto {
    id:string;
    resume_id?: string;
    username?: string;
    fullname?:string;
    email?:string;
    bio?: string;
    profileImage?: string;
    ranking?: string;
    role:string;
}