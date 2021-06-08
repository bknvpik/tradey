import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, DeepPartial, DeleteResult, Not, Repository } from 'typeorm';
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

      async findOne(id: string): Promise<Item> {
        const item = await this.itemsRepository.findOne(id);
        return item;
      }

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

      async getItemDetails(itemId: string): Promise<Item> {
        const item = await createQueryBuilder().select("item").from(Item, "item")
        .leftJoinAndSelect("item.category", "category")
        .leftJoinAndSelect("item.size", "size")
        .leftJoinAndSelect("item.condition", "condition")
        .leftJoinAndSelect("item.images", "images")
        .where("item.id = :id", { id: itemId })
        .getOne();
        return item;
      }

      async findByCategory(itemCategory: string, userId: string): Promise<any> {
        const items = await createQueryBuilder().select("item").from(Item, "item")
        .leftJoinAndSelect("item.category", "category")
        .leftJoinAndSelect("item.size", "size")
        .leftJoinAndSelect("item.condition", "condition")
        .leftJoinAndSelect("item.images", "images")
        .leftJoin("item.user", "user")
        .where("category.category = :category", { category: itemCategory })
        .andWhere("user.id != :id", { id: userId })
        .getMany();
        return items;
      }

      async findItemAndDetails(itemId: string): Promise<any> {
        const item = await createQueryBuilder().select("item").from(Item, "item")
        .leftJoinAndSelect("item.category", "category")
        .leftJoinAndSelect("item.size", "size")
        .leftJoinAndSelect("item.condition", "condition")
        .leftJoinAndSelect("item.images", "images")
        .where("item.id = :id", { id: itemId })
        .getOne();
        return item;
      }
}
