import { Controller, Get } from '@nestjs/common';

@Controller('add-item')
export class AddItemController {

    @Get()
    addItem(): string {
        return 'Renders add-item page';
    }
}
