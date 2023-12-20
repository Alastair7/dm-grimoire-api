import { Rarities } from "../../../common/enums/rarities";
import { BaseModel } from "../common/baseModel";
import { EquipmentCategory } from "../equipment-category/equipmentCategoryModel";

export interface MagicItem extends BaseModel {
  desc?: string[];
  equipment_category?: EquipmentCategory;
  rarity?: Rarities;
  variants?: Variant[];
  variant?: boolean;
}

interface Variant {
  index?: string;
  name?: string;
}
