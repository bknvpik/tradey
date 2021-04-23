import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any) {
    console.log(req.user)
    return this.authService.login(req.user);
  }

  @Post('sign-up')
  async signUp(@Request() req: any) {
    return this.authService.signUp(req.body);
  }

  @Get('sign-out')
  signOut(): string {
      return "Signs-out logged user";
  }

  @Get('about')
  about(): string {
    return "Renders about page";
  }
}
