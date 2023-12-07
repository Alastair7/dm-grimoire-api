import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetEquipmentCategoriesResponse } from "../../models/D&D/equipment-category/getEquipmentCategoriesResponseModel";
import { GetEquipmentCategoryResponse } from "../../models/D&D/equipment-category/getEquipmentCategoryResponseModel";
import { IEquipmentCategoriesService } from "./IEquipmentCategoriesService";

export class EquipmentCategoriesService implements IEquipmentCategoriesService {
  async getEquipmentCategories(): Promise<GetEquipmentCategoriesResponse> {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };

      const response: AxiosResponse<GetEquipmentCategoriesResponse> =
        await axios.get(
          "https://www.dnd5eapi.co/api/equipment-categories",
          requestConfig
        );

      const equipmentCategoriesData: GetEquipmentCategoriesResponse =
        response.data;

      return Promise.resolve(equipmentCategoriesData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getEquipmentCategory(
    index: string
  ): Promise<GetEquipmentCategoryResponse> {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };

      const response: AxiosResponse<GetEquipmentCategoryResponse> =
        await axios.get(
          `https://www.dnd5eapi.co/api/equipment-categories/${index}`,
          requestConfig
        );

      const equipmentCategoryData = response.data;

      return Promise.resolve(equipmentCategoryData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
