import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersController } from 'src/users/users.controller';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [forwardRef(() => UsersModule), PassportModule, JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '1200s' }
  })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [UsersController],
  exports: [AuthModule, AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
