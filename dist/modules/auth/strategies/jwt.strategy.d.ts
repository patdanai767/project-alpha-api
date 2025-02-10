import { Strategy } from 'passport-jwt';
import { JwtInterface } from '../interfaces/jwt-payload.interface';
import { UserService } from 'src/modules/users/users.service';
declare const JwtAccessTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtAccessTokenStrategy extends JwtAccessTokenStrategy_base {
    private readonly userService;
    constructor(userService: UserService);
    validate(payload: JwtInterface): Promise<import("../../users/schemas/user.schema").User>;
}
export {};
