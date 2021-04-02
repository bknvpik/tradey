import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class UsersController {
    @Get('login')
    login(): string {
        return "Renders login page";
    }

    @Get('sign-up')
    signUp(): string {
        return "Renders sign-up page";
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
