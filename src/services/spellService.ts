import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetSpellsResponseModel } from "../models/D&D/spells/getSpellsResponseModel";

export class SpellService {
  async getSpells(): Promise<GetSpellsResponseModel> {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };

      const response: AxiosResponse<GetSpellsResponseModel> = await axios.get(
        "https://www.dnd5eapi.co/api/spells",
        requestConfig
      );

      const spellsData: GetSpellsResponseModel = {
        count: response.data.count,
        results: response.data.results.map((spellInfo) => ({
          index: spellInfo.index,
          name: spellInfo.name,
        })),
      };

      return Promise.resolve(spellsData);
    } catch (error) {
      throw error;
    }
  }
}
