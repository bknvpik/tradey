import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, Repository } from 'typeorm';
import { MakeOfferPostDto } from './dtos/make-offer-post.dto';
import { MyOffersDto } from './dtos/my-offers.dto';
import { Offer } from './entities/offer.entity';

@Injectable()
export class OffersService {
    constructor(
        @InjectRepository(Offer)
        private offersRepository: Repository<Offer>
    ) {}

        async createOffer(offer: MakeOfferPostDto): Promise<Offer> {
            const createdOffer = await this.offersRepository.save(offer);
            return createdOffer;
        }

        async findUserOffers(userId: string): Promise<MyOffersDto> {
            const offeredToMe = await createQueryBuilder().select("offer").from(Offer, "offer")
            .leftJoinAndSelect("offer.item", "item")
            .leftJoinAndSelect("item.images", "itemImages")
            .leftJoinAndSelect("offer.itemOffered", "itemOffered")
            .leftJoinAndSelect("itemOffered.images", "itemOfferedImages")
            .leftJoinAndSelect("item.user", "user")
            .leftJoinAndSelect("itemOffered.user", "offeredUser")
            .where("user.id = :id", { id: userId })
            .getMany();

            const myOffers = await createQueryBuilder().select("offer").from(Offer, "offer")
            .leftJoinAndSelect("offer.item", "item")
            .leftJoinAndSelect("item.images", "itemImages")
            .leftJoinAndSelect("offer.itemOffered", "itemOffered")
            .leftJoinAndSelect("itemOffered.images", "itemOfferedImages")
            .leftJoinAndSelect("itemOffered.user", "offeredUser")
            .leftJoinAndSelect("item.user", "user")
            .where("offeredUser.id = :id", { id: userId })
            .getMany();

            const offers: MyOffersDto = { myOffers: myOffers, offeredToMe: offeredToMe }; 
            return offers;
        }
}
