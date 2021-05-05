import { Controller, Get, Post, Param, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { Item } from './entities/item.entity';
import { ItemsService } from './items.service';
import { AddItemDto } from './dtos/add-item.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

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
    @UseInterceptors(FileInterceptor('image', {
        dest: "./uploads/item-images"
    }))
    async addNewItem(@Body() newItem: AddItemDto, @UploadedFile() image: Express.Multer.File) {
        console.log(image);
        newItem.images = [{image: image.filename}];
        console.log(newItem);
        return this.itemsService.createItem(newItem);
    }
}
