import { BaseModel } from "../common/baseModel";
import { EquipmentCategory } from "../equipment-category/equipmentCategoryModel";

export interface MagicItem extends BaseModel {
  desc?: string[];
  equipment_category?: EquipmentCategory;
  rarity?: Rarities;
  variants?: Variant[];
  variant?: boolean;
}

export enum Rarities {
  Varies = "Varies",
  Common = "Common",
  Uncommon = "Uncommon",
  Rare = "Rare",
  VeryRare = "Very Rare",
  Legendary = "Legendary",
  Artifact = "Artifact",
}

interface Variant {
  index?: string;
  name?: string;
}
