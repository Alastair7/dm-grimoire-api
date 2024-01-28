import { GetEquipmentCategoriesResponse } from "../../models/D&D/equipment-category/getEquipmentCategoriesResponseModel";
import { GetEquipmentCategoryResponse } from "../../models/D&D/equipment-category/getEquipmentCategoryResponseModel";
import { IDndService } from "../../third-party/d&d/IDndService";
import { inject, injectable } from "inversify";
import TYPES from "../../utils/DI/types";
import { ApiRequestTypes } from "../../common/enums/apiRequestTypes";
import { IEquipmentCategoriesService } from "./iEquipmentCategoriesService";

@injectable()
export class EquipmentCategoriesService implements IEquipmentCategoriesService {
  private _dndService: IDndService;

  constructor(@inject(TYPES.IDndService) dndService: IDndService) {
    this._dndService = dndService;
  }

  async getEquipmentCategories(): Promise<GetEquipmentCategoriesResponse> {
    const response: GetEquipmentCategoriesResponse =
      await this._dndService.getAll(ApiRequestTypes.EQUIPMENT_CATEGORIES);

    return response;
  }
  async getEquipmentCategory(
    index: string
  ): Promise<GetEquipmentCategoryResponse> {
    const response: GetEquipmentCategoryResponse = await this._dndService.get(
      index,
      ApiRequestTypes.EQUIPMENT_CATEGORIES
    );

    return response;
  }
}
