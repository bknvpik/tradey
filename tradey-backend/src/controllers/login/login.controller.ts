import { Controller, Get } from '@nestjs/common';

@Controller('login')
export class LoginController {

    @Get()
    login(): string {
        return 'Renders login page';
    }
}