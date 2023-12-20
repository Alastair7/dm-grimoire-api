import { EquipmentCategory } from "../equipment-category/equipmentCategoryModel";
import { Option } from "./optionModel";

export interface OptionSet {
  option_set_type: string;
  options_array?: Option[];
  equipment_category?: EquipmentCategory;
  resource_list?: string;
}
