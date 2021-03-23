import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { AppController } from './controllers/app/app.controller';
import { BrowseController } from './controllers/browse/browse.controller';
import { AboutController } from './controllers/about/about.controller';
import { LoginController } from './controllers/login/login.controller';
import { SignUpController } from './controllers/sign-up/sign-up.controller';
import { ViewProfileController } from './controllers/view-profile/view-profile.controller';
import { AddItemController } from './controllers/add-item/add-item.controller';
import { MakeOfferController } from './controllers/make-offer/make-offer.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "ec2-108-128-104-50.eu-west-1.compute.amazonaws.com",
      port: 5432,
      username: "iqpttajsalwsnv",
      password: "3686e81e2b1c5bba5e94eab71ef6bcea328cd5732819037508df53947282a63e",
      database: "dd8t1dm56uccfe",
      entities: [],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false
      },
    }),
  ],
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
export class AppModule {
  constructor(private connection: Connection) {}
}
