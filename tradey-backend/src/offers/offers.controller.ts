import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request, Response } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { Item } from 'src/items/entities/item.entity';
import { ItemsService } from 'src/items/items.service';
import { MakeOfferGetDto } from 'src/offers/dtos/make-offer-get.dto';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { MakeOfferPostDto } from './dtos/make-offer-post.dto';
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
        console.log(returnData);
        return returnData;
    }

    @Post('make-offer')
    async makeOfferPost(@Body() offerData: MakeOfferPostDto): Promise<Offer> {
        console.log(offerData);
        const offer = await this.offersService.createOffer(offerData);
        console.log(offer);
        return offer;
    }

    @Get('view-profile/my-offers')
    async myOffers(@Req() req: Request) {
        const cookie = req.cookies['jwt'];
        const data = await this.authService.verifyCookie(cookie);
  
        const offers = await this.offersService.findUserOffers(data.username);
        console.log(offers);
        return offers;
    }
}
