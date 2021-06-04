import { Offer } from "../entities/offer.entity";

export class MyOffersDto {
    myOffers: Offer[];
    offeredToMe: Offer[];
  }