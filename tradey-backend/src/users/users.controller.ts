import { Body, Controller, Get, Post, Put, Req, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request, Response } from 'express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { UsersService } from './users.service';
import { v4 as uuidv4 } from 'uuid';
import { Item } from 'src/items/entities/item.entity';
import { UserDetails } from './entities/user-details.entity';

@Controller()
export class UsersController {  
    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UsersService
      ) {}
      
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Req() req: any, @Res({ passthrough: true }) res: Response) {
      const jwt = await this.authService.login(req.user);
      if(!res.cookie('jwt', jwt, { httpOnly: true }))
        throw new Error("Invalid credentials!");
      return "Succesfully logged in!";
    }

    @Post('sign-up')
    async signUp(@Body() userData: any) {
      const user = await this.authService.signUp(userData);
      if(!user)
        throw new Error("User with that e-mail already exists!");
      return "Account created successfully!";
    }
  
    @Get('sign-out')
    async signOut(@Res({ passthrough: true }) res: Response) {
        res.clearCookie('jwt');
        return 'logged out!';
    }
    
    @Get('verify-cookie')
    async verifyCookie(@Req() req: Request) {
      const cookie = req.cookies['jwt'];
      return await this.authService.verifyCookie(cookie);
    }
    
    @Get('view-profile/about-me')
    async viewProfile(@Req() req: Request): Promise<UserDetails> {
        const cookie = req.cookies['jwt'];
        const data = await this.authService.verifyCookie(cookie);
  
        const user = await this.usersService.getUserDetails(data.sub);
        return user;
    }
  
    @Get('view-profile/my-items')
    async myItems(@Req() req: Request): Promise<Item[]> {
      const cookie = req.cookies['jwt'];
      const data = await this.authService.verifyCookie(cookie);
      
      const userItems = await this.usersService.getUserItems(data.username);
      return userItems;
    }

    @UseInterceptors(FileInterceptor('image', {
      storage: diskStorage({
          destination: "../tradey-frontend/public/assets/users-images",
          filename: (req, file, cb) => {
              const fileName = uuidv4();
              cb(null, `${fileName}${extname(file.originalname)}`)
          }
      })
    }))
    @Put('view-profile/edit-profile')
    async editProfile(@Body() userData: any, @UploadedFile() image: Express.Multer.File) {
      console.log(userData)
      console.log(image);
      if(image)
        userData.image = image.filename;
      
      await this.usersService.editUserDetails(userData);
    }
}
