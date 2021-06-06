import { User } from "../entities/user.entity";

export class UserDetailsDto {
    country: string;
    zipCode: string;
    address1: string;
    address2: string;
    rating: number;
    profileImage: string;
    user: User;
  }