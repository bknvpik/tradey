import { ItemCategories } from "../entities/item-categories.entity";
import { ItemConditions } from "../entities/item-conditions.entity";
import { ItemSizes } from "../entities/item-sizes.entity";

export class AddItemGetDto { 
    user: any;
    categories: ItemCategories[]; 
    sizes: ItemSizes[];
    conditions: ItemConditions[];
}