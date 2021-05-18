import { Controller, Get, Post, Param, Body, Req } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { AuthService } from 'src/auth/auth.service';

@Controller()
export class UsersController {  
    @Get('view-profile/:userId/:content')
    viewProfile(@Param() params: string[]): string {
        return 'Renders view-profile page of user with id: ' + params['userId'] + ' and content: ' + params['content'];
    }
}
