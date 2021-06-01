import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { Item } from 'src/items/entities/item.entity';
import { ItemsService } from 'src/items/items.service';
import { UsersService } from 'src/users/users.service';

@Controller()
export class OffersController {
    constructor(
        private readonly itemsService: ItemsService,
        private readonly usersService: UsersService,
        private readonly authService: AuthService
    ) {}
    
    @Get('make-offer/:itemId')
    async makeOffer(@Param('itemId') itemId: string, @Req() req: Request): Promise<Object> {
        const cookie = req.cookies['jwt'];
        const data = await this.authService.verifyCookie(cookie);
      
        const userItems = await this.usersService.getUserItems(data.username);
        const tradingItem = await this.itemsService.findOne(itemId);
        return { userItems, tradingItem };
    }

    @Post('make-offer/:itemId')
    addNewOffer(@Param('itemId') itemId: number): string {
        return 'Renders make-offer page for item with id: ' + itemId;
    }
}
