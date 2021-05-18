import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersController } from 'src/users/users.controller';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' }
  })],
  providers: [AuthService, LocalStrategy, JwtStrategy, UsersService],
  controllers: [UsersController],
  exports: [AuthService,]
})
export class AuthModule {}