import { Controller, Get } from '@nestjs/common';

@Controller('about')
export class AboutController {
    
    @Get()
    about(): string {
        return 'Renders about page';
    }
}
