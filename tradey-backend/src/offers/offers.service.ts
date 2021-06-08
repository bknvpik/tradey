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
            console.log(createdOffer);
            return createdOffer;
        }

        async findUserOffers(username: string): Promise<MyOffersDto> {
            const myOffers = await createQueryBuilder().select("offer").from(Offer, "offer")
            .leftJoinAndSelect("offer.item", "item")
            .leftJoinAndSelect("item.images", "images")
            .leftJoinAndSelect("offer.itemOffered", "itemOffered")
            .leftJoin("item.user", "user")
            .where("user.email = :email", { email: username })
            .getMany();

            const offeredToMe = await createQueryBuilder().select("offer").from(Offer, "offer")
            .leftJoinAndSelect("offer.item", "item")
            .leftJoinAndSelect("offer.itemOffered", "itemOffered")
            .leftJoin("itemOffered.user", "user")
            .where("user.email = :email", { email: username })
            .getMany();

            console.log(myOffers);
            console.log(offeredToMe);
            const offers: MyOffersDto = { myOffers: myOffers, offeredToMe: offeredToMe }; 
            return offers;
        }
}
