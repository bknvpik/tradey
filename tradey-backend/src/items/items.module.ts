import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ItemCategories } from './entities/item-categories.entity';
import { ItemConditions } from './entities/item-conditions.entity';
import { ItemImages } from './entities/item-images.entity';
import { ItemSizes } from './entities/item-sizes.entity';
import { Item } from './entities/item.entity';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

@Module({
    imports: 
    [TypeOrmModule.forFeature
        ([
            Item,
            ItemCategories,
            ItemSizes,
            ItemConditions,
            ItemImages
        ]),
        AuthModule
    ],
    controllers: [ItemsController],
    providers: [ItemsService],
    exports: [TypeOrmModule]
})
export class ItemsModule {}
