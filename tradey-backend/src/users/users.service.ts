import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { Item } from 'src/items/entities/item.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}
      
      async findAllUsers(): Promise<User[]> {
        const users = this.usersRepository.find();
        return users;
      }

      async findOneByEmail(username: string): Promise<User | undefined> {
        const user = await this.usersRepository.findOne({ email: username });
        return user;
      }
      
      async getUserItems(username: string): Promise<Item[] | undefined> {
        const items = await createQueryBuilder().select("item").from(Item, "item")
        .leftJoinAndSelect("item.category", "category")
        .leftJoinAndSelect("item.size", "size")
        .leftJoinAndSelect("item.condition", "condition")
        .leftJoinAndSelect("item.image", "image")
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
        return createdUser;
      }

      async remove(username: string): Promise<void> {
        await this.usersRepository.delete({ email: username });
      }
}
