import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './commons/constants';
import { JwtAccessTokenStrategy } from './strategies/jwt.strategy';
import { CoursesModule } from '../courses/courses.module';

@Module({
    imports: [UsersModule,CoursesModule,
      JwtModule.register({
        global:true,
        secret: jwtConstants.secret,
        signOptions:{ expiresIn: "7 days"}
      })
    ],
  controllers: [AuthController],
  providers: [AuthService,JwtAccessTokenStrategy],
  exports: [AuthService]
})
export class AuthModule {}
