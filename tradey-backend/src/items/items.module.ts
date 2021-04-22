import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemCategories } from './entities/item-categories.entity';
import { ItemConditions } from './entities/item-conditions.entity';
import { ItemSizes } from './entities/item-sizes.entity';
import { Item } from './entities/item.entity';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

@Module({
    imports: [TypeOrmModule.forFeature([Item, ItemCategories, ItemSizes, ItemConditions])],
    controllers: [ItemsController],
    exports: [TypeOrmModule],
    providers: [ItemsService]
})
export class ItemsModule {}
