import { Controller, Get } from '@nestjs/common';

@Controller('sign-up')
export class SignUpController {

    @Get()
    signUp(): string {
        return 'Renders sign-up page';
    }
}
