import { Controller, Get, Post, Param, Body } from '@nestjs/common';

@Controller()
export class UsersController {
    @Get('view-profile/:userId/:content')
    viewProfile(@Param() params: string[]): string {
        return 'Renders view-profile page of user with id: ' + params['userId'] + ' and content: ' + params['content'];
    }
}
