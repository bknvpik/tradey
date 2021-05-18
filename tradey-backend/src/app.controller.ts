import { BadRequestException, Body, Controller, Get, Post, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: any, @Res({ passthrough: true }) res: Response) {
    console.log(req.user)
    const jwt = await this.authService.login(req.user);
    res.cookie('jwt', jwt, { httpOnly: true });
    return {
      message: 'Success'
    };
  }

  @Post('sign-up')
  async signUp(@Body() userData: any) {
    return this.authService.signUp(userData);
  }

  @Get('sign-out')
  async signOut(@Res({ passthrough: true }) res: Response) {
      res.clearCookie('jwt');
      return {
        message: 'logged out!'
      }
  }

  @Get('about')
  about(): string {
    return "Renders about page";
  }

  @Get('view-profile')
  async testing(@Req() req: Request) {
      const cookie = req.cookies['jwt'];
      const data = await this.authService.verifyCookie(cookie);

      const user = await this.usersService.findOneByEmail(data.username);
      console.log(user);
      return user;
  }
}
