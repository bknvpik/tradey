import { Module } from '@nestjs/common';
import { AppController } from './controllers/app/app.controller';
import { BrowseController } from './controllers/browse/browse.controller';
import { AboutController } from './controllers/about/about.controller';
import { LoginController } from './controllers/login/login.controller';
import { SignUpController } from './controllers/sign-up/sign-up.controller';
import { ViewProfileController } from './controllers/view-profile/view-profile.controller';
import { AddItemController } from './controllers/add-item/add-item.controller';
import { MakeOfferController } from './controllers/make-offer/make-offer.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    BrowseController,
    AboutController,
    LoginController,
    SignUpController,
    ViewProfileController,
    AddItemController,
    MakeOfferController
  ],
  providers: [AppService],
})
export class AppModule {}
