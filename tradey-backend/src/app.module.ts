import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { AppController } from './app.controller';
import { UsersController } from './users/users.controller';
import { ItemsController } from './items/items.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';
import { ItemsModule } from './items/items.module';
import { OffersModule } from './offers/offers.module';

TypeOrmModule.forRootAsync({
  useFactory: async () =>
    Object.assign(await getConnectionOptions(), {
      autoLoadEntities: true,
    }),
})

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, ItemsModule, OffersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
