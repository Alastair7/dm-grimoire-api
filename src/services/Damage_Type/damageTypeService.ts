import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetAllDamageTypesResponse } from "../../models/D&D/damage_types/getAllDamageTypesResponseModel";
import { GetDamageTypeResponse } from "../../models/D&D/damage_types/getDamageTypeResponseModel";
import { IDamageTypeService } from "./iDamageTypeService";

export class DamageTypeService implements IDamageTypeService {
  async getAllDamageTypes(): Promise<GetAllDamageTypesResponse> {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };

      const response: AxiosResponse<GetAllDamageTypesResponse> =
        await axios.get(
          "https://www.dnd5eapi.co/api/damage-types",
          requestConfig
        );
      const damageTypesData: GetAllDamageTypesResponse = {
        count: response.data.count,
        results: response.data.results.map((damageTypesInfo) => ({
          index: damageTypesInfo.index,
          name: damageTypesInfo.name,
          url: damageTypesInfo.url,
        })),
      };

      return Promise.resolve(damageTypesData);
    } catch (error) {
      throw error;
    }
  }

  async getDamageType(name: string): Promise<GetDamageTypeResponse> {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };

      const response: AxiosResponse<GetDamageTypeResponse> = await axios.get(
        `https://www.dnd5eapi.co/api/damage-types/${name}`,
        requestConfig
      );
      const damageTypeData = {
        index: response.data.index,
        name: response.data.name,
        //desc: response.data.desc,
      };

      return Promise.resolve(damageTypeData);
    } catch (error) {
      throw error;
    }
  }
}
