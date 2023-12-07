import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetTraitResponse } from "../../models/D&D/traits/getTraitResponseModel";
import { GetTraitsResponse } from "../../models/D&D/traits/getTraitsResponseModel";
import { ITraitService } from "./ITraitService";

export class TraitService implements ITraitService {
  async getTraits(): Promise<GetTraitsResponse> {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };

      const response: AxiosResponse<GetTraitsResponse> = await axios.get(
        "https://www.dnd5eapi.co/api/traits",
        requestConfig
      );

      const traitsData: GetTraitsResponse = response.data;

      return Promise.resolve(traitsData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getTrait(index: string): Promise<GetTraitResponse> {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };

      const response: AxiosResponse<GetTraitResponse> = await axios.get(
        `https://www.dnd5eapi.co/api/traits/${index}`,
        requestConfig
      );

      const traitData: GetTraitResponse = response.data;
      return Promise.resolve(traitData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
