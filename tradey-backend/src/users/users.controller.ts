import { Controller, Get, Post, Param } from '@nestjs/common';

@Controller()
export class UsersController {
    @Post('login')
    login(): string {
        return "Login user";
    }

    @Post('sign-up')
    signUp(): string {
      return 'This action adds a new user';
    }

    @Get('sign-out')
    signOut(): string {
        return "Signs-out logged user";
    }

    @Get('view-profile/:userId/:content')
    viewProfile(@Param() params: string[]): string {
        return 'Renders view-profile page of user with id: ' + params['userId'] + ' and content: ' + params['content'];
    }
}
