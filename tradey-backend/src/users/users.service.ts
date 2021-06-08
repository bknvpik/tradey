import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { Item } from 'src/items/entities/item.entity';
import { UserDetailsDto } from './dtos/user-details.dto';
import { UserDetails } from './entities/user-details.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        @InjectRepository(UserDetails)
        private usersDetailsRepository: Repository<UserDetails>
      ) {}
      
      async findAllUsers(): Promise<User[]> {
        const users = this.usersRepository.find();
        return users;
      }

      async findOneByEmail(username: string): Promise<User | undefined> {
        const user = await this.usersRepository.findOne({ email: username });
        return user;
      }
      
      async getUserDetails(userId: string): Promise<any> {
        const userDetails = await createQueryBuilder().select("userDetails").from(UserDetails, "userDetails")
        .leftJoinAndSelect("userDetails.user", "user")
        .where("user.id = :id", { id: userId })
        .getOne();
        console.log(userDetails);
        return userDetails;
      }

      async getUserItems(username: string): Promise<Item[] | undefined> {
        const items = await createQueryBuilder().select("item").from(Item, "item")
        .leftJoinAndSelect("item.category", "category")
        .leftJoinAndSelect("item.size", "size")
        .leftJoinAndSelect("item.condition", "condition")
        .leftJoinAndSelect("item.images", "images")
        .leftJoin("item.user", "user").where("user.email = :email", { email: username})
        .getMany();
        return items;
      }

      async createUser(userData: any): Promise<User> {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userData.password, salt);
        const user = {
          ...userData,
          password: hashedPassword,
        }
        const createdUser = await this.usersRepository.save(user);
        this.usersDetailsRepository.save({ user: user })
        return createdUser;
      }

      async editUserDetails(userData: any) {
        const result = await createQueryBuilder()
        .update(UserDetails)
        .set({ 
          firstName: userData.firstName,
          lastName: userData.lastName,
          country: userData.country,
          city: userData.city,
          zipCode: userData.zipCode,
          address1: userData.address1,
          address2: userData.address2,
          image: userData.image
        })
        .where("userId = :userId", { userId: userData.userId })
        .execute();
        console.log(result);
      }

      async remove(username: string): Promise<void> {
        await this.usersRepository.delete({ email: username });
      }
}
