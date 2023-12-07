import { GetEquipmentCategoriesResponse } from "../../models/D&D/equipment-category/getEquipmentCategoriesResponseModel";
import { GetEquipmentCategoryResponse } from "../../models/D&D/equipment-category/getEquipmentCategoryResponseModel";

export interface IEquipmentCategoriesService {
  getEquipmentCategories(): Promise<GetEquipmentCategoriesResponse>;
  getEquipmentCategory(index: string): Promise<GetEquipmentCategoryResponse>;
}
