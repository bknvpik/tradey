import { Controller, Get, Post, Param, Body, UseInterceptors, UploadedFile, Req, UploadedFiles } from '@nestjs/common';
import { Request, Response } from 'express';
import { Item } from './entities/item.entity';
import { ItemsService } from './items.service';
import { AddItemDto } from './dtos/add-item.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path, { extname } from 'path';
import { AuthService } from 'src/auth/auth.service';

@Controller()
export class ItemsController {
    constructor(
        private readonly itemsService: ItemsService,
        private readonly authService: AuthService
    ) {}
    
    @Get('browse')
    async browseDefault() {
        return await this.itemsService.findByCategory('clothing');
    }

    @Get('browse/:itemCategory')
    async browseCategory(@Param('itemCategory') itemCategory: string): Promise<Item[]> {
        return await this.itemsService.findByCategory(itemCategory);
    }

    @Get('view-item/:itemId')
    async viewItem(@Param('itemId') itemId: string): Promise<Item> {
        return await this.itemsService.findOne(itemId);
    }

    @Get('add-item')
    async getItemProperties(@Req() req: Request) {
        const cookie = req.cookies['jwt'];
        const user = await this.authService.verifyCookie(cookie);
        const categories = await this.itemsService.getCategories();
        const sizes = await this.itemsService.getSizes();
        const conditions = await this.itemsService.getConditions();
        return { user, categories, sizes, conditions };
    }

    @Post('add-item')
    @UseInterceptors(FilesInterceptor('images', 4, {
        storage: diskStorage({
            destination: "../tradey-frontend/public/assets/items-images",
            filename: (req, file, cb) => {
                const fileName = uuidv4();
                cb(null, `${fileName}${extname(file.originalname)}`)
            }
        })
    }))
    async addNewItem(@Body() newItem: AddItemDto, @UploadedFiles() images: Array<Express.Multer.File>): Promise<Item> {
        console.log(images);
        newItem.images = [];
        images.forEach(img => {
            const image = {
              image: img.filename
            };
            newItem.images.push(image);
          });
        console.log(newItem);
        return await this.itemsService.createItem(newItem);
    }

}
