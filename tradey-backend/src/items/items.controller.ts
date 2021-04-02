import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class ItemsController {
    @Get('')
    browseDefault(): string {
        return "Renders browse page of default category";
    }

    @Get('browse/:itemCategory')
    browseCategory(@Param('itemCategory') itemCategory: string): string {
        return "Renders browse page of category: " + itemCategory;
    }

    @Get('add-item')
    addItem(): string {
        return "Renders add-item page";
    }
}
