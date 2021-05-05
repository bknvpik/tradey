import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}
      
      findAll(): Promise<User[]> {
        return this.usersRepository.find();
      }
    
      findOne(id: string): Promise<User> {
        return this.usersRepository.findOne(id);
      }

      findOneByEmail(email: string): Promise<User | undefined> {
        return this.usersRepository.findOne({ email: email });
      }
      
      async createUser(userData: any): Promise<any> {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userData.password, salt);
        const user = {
          ...userData,
          password: hashedPassword,
        }
        this.usersRepository.save(user);
      }

      async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
      }
}
