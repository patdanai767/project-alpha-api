import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from '../commons/constants';
import { JwtInterface } from '../interfaces/jwt-payload.interface';
import { UserService } from 'src/modules/users/users.service';

@Injectable()
export class JwtAccessTokenStrategy extends PassportStrategy(Strategy, 'jwt-access-token') {
  constructor(
    private readonly userService: UserService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: JwtInterface) {
    const user = await this.userService.getProfile(payload.sub)
    if(!user){
        throw new UnauthorizedException()
    }

    return user
  }
}
