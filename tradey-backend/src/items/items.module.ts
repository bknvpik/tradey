import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { ItemsController } from './items.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Item])],
    controllers: [ItemsController],
    exports: [TypeOrmModule]
})
export class ItemsModule {}
