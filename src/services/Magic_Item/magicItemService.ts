import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { IMagicItemService } from "./iMagicItemService";
import { GetMagicItemsResponse } from "../../models/D&D/magic-items/getMagicItemsResponseModel";
import { GetMagicItemResponse } from "../../models/D&D/magic-items/getMagicItemResponseModel";
import { Rarities } from "../../models/D&D/magic-items/magicItemModel";

export class MagicItemService implements IMagicItemService {
  async getMagicItems(): Promise<GetMagicItemsResponse> {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };

      const response: AxiosResponse<GetMagicItemsResponse> = await axios.get(
        "https://www.dnd5eapi.co/api/magic-items",
        requestConfig
      );

      const magicItemsData: GetMagicItemsResponse = {
        count: response.data.count,
        results: response.data.results.map((magicItemInfo) => ({
          index: magicItemInfo.index,
          name: magicItemInfo.name,
        })),
      };

      return Promise.resolve(magicItemsData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getMagicItem(index: string): Promise<GetMagicItemResponse> {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };

      const response: AxiosResponse<GetMagicItemResponse> = await axios.get(
        `https://www.dnd5eapi.co/api/magic-items/${index}`,
        requestConfig
      );

      const magicItemData: GetMagicItemResponse = {
        index: response.data.index,
        name: response.data.name,
        desc: response.data.desc,
        equipment_category: {
          index: response.data.equipment_category?.index,
          name: response.data.equipment_category?.name,
        },
        rarity: response.data.rarity as Rarities,
        variants: response.data.variants?.map((variantInfo) => ({
          index: variantInfo.index,
          name: variantInfo.name,
        })),
        variant: response.data.variant,
      };

      return Promise.resolve(magicItemData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
