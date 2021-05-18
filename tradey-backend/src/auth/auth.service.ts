import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOneByEmail(username);
        if(user && await bcrypt.compare(password, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any): Promise<string> {
        const payload = { username: user.email, sub: user.id };
        const jwt = await this.jwtService.signAsync(payload);
        return jwt;
    }

    async signUp(userData: any): Promise<any> {
        return await this.usersService.createUser(userData);
    }

    async verifyCookie(cookie: string) {
        return await this.jwtService.verifyAsync(cookie);
    }
}
