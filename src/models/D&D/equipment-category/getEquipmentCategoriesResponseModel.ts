import { EquipmentCategory } from "./equipmentCategoryModel";

export interface GetEquipmentCategoriesResponse {
  count: number;
  results: EquipmentCategory[];
}
