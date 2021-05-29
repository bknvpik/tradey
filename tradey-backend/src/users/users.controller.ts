import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { UsersService } from './users.service';

@Controller()
export class UsersController {  
    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UsersService
      ) {}
      
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Req() req: any, @Res({ passthrough: true }) res: Response) {
      console.log(req.user)
      const jwt = await this.authService.login(req.user);
      console.log(jwt);
      if(!res.cookie('jwt', jwt, { httpOnly: true }))
        throw new Error("Invalid credentials!");
      return "Succesfully logged in!";
    }

    @Post('sign-up')
    async signUp(@Body() userData: any) {
      const user = await this.authService.signUp(userData);
      if(!user)
        throw new Error("User with that e-mail already exists!");
      return "Account created successfully!";
    }
  
    @Get('sign-out')
    async signOut(@Res({ passthrough: true }) res: Response) {
        res.clearCookie('jwt');
        return 'logged out!';
    }
    
    @Get('view-profile')
    async viewProfile(@Req() req: Request) {
        const cookie = req.cookies['jwt'];
        const data = await this.authService.verifyCookie(cookie);
  
        const user = await this.usersService.findOneByEmail(data.username);
        console.log(user);
        return user;
    }
  
    @Get('my-items')
    async myItems(@Req() req: Request) {
      const cookie = req.cookies['jwt'];
      const data = await this.authService.verifyCookie(cookie);
      
      const userItems = await this.usersService.getUserItems(data.username);
      console.log(userItems);
      return userItems;
    }
}
