import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, DeepPartial, Repository } from 'typeorm';
import { Item } from './entities/item.entity';
import { ItemCategories } from './entities/item-categories.entity';
import { ItemConditions } from './entities/item-conditions.entity';
import { ItemSizes } from './entities/item-sizes.entity';
import { AddItemDto } from './dtos/add-item.dto';
import { AddItemImagesDto } from './dtos/add-item-images.dto';
import { ItemImages } from './entities/item-images.entity';

@Injectable()
export class ItemsService {
    constructor(
      @InjectRepository(Item)
      private itemsRepository: Repository<Item>,
      @InjectRepository(ItemCategories)
      private itemCategoriesRepository: Repository<ItemCategories>,
      @InjectRepository(ItemConditions)
      private itemConditionsRepository: Repository<ItemConditions>,
      @InjectRepository(ItemSizes)
      private itemSizesRepository: Repository<ItemSizes>,
      @InjectRepository(ItemImages)
      private itemImagesRepository: Repository<ItemImages>,
    ) {}

      findAll(): Promise<Item[]> {
        return this.itemsRepository.find();
      }

      async getCategories(): Promise<ItemCategories[]>{
        return await this.itemCategoriesRepository.find();
      }

      async getSizes(): Promise<ItemSizes[]>{
        return await this.itemSizesRepository.find();
      }

      async getConditions(): Promise<ItemConditions[]>{
        return await this.itemConditionsRepository.find();
      }

      async createItem(item: AddItemDto, itemImages: AddItemImagesDto) {
        await this.itemsRepository.save(item);
        //await this.itemImagesRepository.save(itemImages);
      }

      async findByCategory(itemCategory: string): Promise<Item[]> {
        const items = await createQueryBuilder().select("item").from(Item, "item")
        .leftJoinAndSelect("item.category", "category")
        .leftJoinAndSelect("item.size", "size")
        .leftJoinAndSelect("item.condition", "condition")
        .leftJoinAndSelect("item.images", "image")
        .where("category.category = :category", { category: itemCategory })
        .getMany();
        return items;
      }
}
