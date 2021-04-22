import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Item } from './entities/item.entity';
import { ItemsService } from './items.service';
import { AddItemDto } from './dtos/add-item.dto';

@Controller()
export class ItemsController {
    constructor(
        private readonly itemsService: ItemsService 
    ) {}
    
    @Get('browse')
    async browseDefault() {
        return await this.itemsService.findByCategory('clothing');
    }

    @Get('browse/:itemCategory')
    async browseCategory(@Param('itemCategory') itemCategory: string): Promise<Item[]> {
        return await this.itemsService.findByCategory(itemCategory);
    }

    @Get('add-item')
    async getItemProperties() {
        const categories = await this.itemsService.getCategories();
        const sizes = await this.itemsService.getSizes();
        const conditions = await this.itemsService.getConditions();
        return { categories, sizes, conditions };
    }

    @Post('add-item')
    addNewItem(@Body() newItem: AddItemDto): Promise<AddItemDto> {
        console.log(newItem);
        return this.itemsService.createItem(newItem);
    }
}
