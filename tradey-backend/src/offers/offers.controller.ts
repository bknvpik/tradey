import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { ItemsService } from 'src/items/items.service';
import { MakeOfferGetDto } from 'src/offers/dtos/make-offer-get.dto';
import { UsersService } from 'src/users/users.service';
import { MakeOfferPostDto } from './dtos/make-offer-post.dto';
import { MyOffersDto } from './dtos/my-offers.dto';
import { Offer } from './entities/offer.entity';
import { OffersService } from './offers.service';

@Controller()
export class OffersController {
    constructor(
        private readonly offersService: OffersService,
        private readonly itemsService: ItemsService,
        private readonly usersService: UsersService,
        private readonly authService: AuthService
    ) {}
    
    @Get('make-offer/:itemId')
    async makeOfferGet(@Param('itemId') itemId: string, @Req() req: Request): Promise<MakeOfferGetDto> {
        const cookie = req.cookies['jwt'];
        const data = await this.authService.verifyCookie(cookie);
      
        const userItems = await this.usersService.getUserItems(data.username);
        const tradingItem = await this.itemsService.findItemAndDetails(itemId);
        const returnData: MakeOfferGetDto = { item: tradingItem, items: userItems };
        return returnData;
    }

    @Post('make-offer')
    async makeOfferPost(@Body() offerData: MakeOfferPostDto): Promise<Offer> {
        const offer = await this.offersService.createOffer(offerData);
        return offer;
    }

    @Get('view-profile/my-offers')
    async myOffers(@Req() req: Request): Promise<MyOffersDto> {
        const cookie = req.cookies['jwt'];
        const data = await this.authService.verifyCookie(cookie);
  
        const offers = await this.offersService.findUserOffers(data.sub);
        return offers;
    }
}
