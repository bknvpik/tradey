import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, DeepPartial, DeleteResult, Repository } from 'typeorm';
import { Item } from './entities/item.entity';
import { ItemCategories } from './entities/item-categories.entity';
import { ItemConditions } from './entities/item-conditions.entity';
import { ItemSizes } from './entities/item-sizes.entity';
import { AddItemDto } from './dtos/add-item.dto';
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

      async findAll(): Promise<Item[]> {
        const items = await this.itemsRepository.find();
        return items;
      }

      async getCategories(): Promise<ItemCategories[]>{
        const categories = await this.itemCategoriesRepository.find();
        return categories;
      }

      async getSizes(): Promise<ItemSizes[]>{
        const itemSizes = await this.itemSizesRepository.find();
        return itemSizes;
      }

      async getConditions(): Promise<ItemConditions[]>{
        const itemConditions = await this.itemConditionsRepository.find();
        return itemConditions;
      }

      async createItem(item: AddItemDto): Promise<Item> {
        const createdItem = await this.itemsRepository.save(item);
        return createdItem;
      }

      async removeItem(itemId: string): Promise<DeleteResult> {
        const removedItem = await this.itemsRepository.delete({ id: itemId });
        return removedItem;
      }

      async findByCategory(itemCategory: string): Promise<Item[]> {
        const items = await createQueryBuilder().select("item").from(Item, "item")
        .leftJoinAndSelect("item.category", "category")
        .leftJoinAndSelect("item.size", "size")
        .leftJoinAndSelect("item.condition", "condition")
        .leftJoinAndSelect("item.images", "images")
        .where("category.category = :category", { category: itemCategory })
        .getMany();
        return items;
      }
}
