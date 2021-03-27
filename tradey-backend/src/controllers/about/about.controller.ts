import { Controller, Get } from '@nestjs/common';

@Controller('about')
export class AboutController {
    
    @Get()
    about() {
        return [
            { id: 1, surname: 'Johnson' },
            { id: 2, surname: 'Knapik' }
        ];
    }
}
