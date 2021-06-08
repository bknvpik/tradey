import { Controller, Get, Post, Param, Body, UseInterceptors, Req, UploadedFiles } from '@nestjs/common';
import { Request } from 'express';
import { Item } from './entities/item.entity';
import { ItemsService } from './items.service';
import { AddItemDto } from './dtos/add-item.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';
import { AuthService } from 'src/auth/auth.service';
import { AddItemGetDto } from './dtos/add-item-get.dto';

@Controller()
export class ItemsController {
    constructor(
        private readonly itemsService: ItemsService,
        private readonly authService: AuthService
    ) {}

    @Get('browse/:itemCategory')
    async browseCategory(@Param('itemCategory', ) itemCategory: string, @Req() req: Request): Promise<Item[]> {
        const cookie = req.cookies['jwt'];
        const data = await this.authService.verifyCookie(cookie);
        
        return await this.itemsService.findByCategory(itemCategory, data.sub);
    }

    @Get('view-item/:itemId')
    async viewItem(@Param('itemId') itemId: string): Promise<Item> {
        return await this.itemsService.getItemDetails(itemId);
    }

    @Get('add-item')
    async getItemProperties(@Req() req: Request): Promise<AddItemGetDto> {
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
