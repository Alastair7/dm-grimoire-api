import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetSpellsResponseModel } from "../models/D&D/spells/getSpellsResponseModel";
import { GetSpellResponseModel } from "../models/D&D/spells/getSpellResponseModel";

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

  async getSpell(index: string): Promise<GetSpellResponseModel> {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };

      const response: AxiosResponse<GetSpellResponseModel> = await axios.get(
        `https://www.dnd5eapi.co/api/spells/${index}`,
        requestConfig
      );

      const spellData: GetSpellResponseModel = {
        index: response.data.index,
        name: response.data.name,
        desc: response.data.desc,
        higher_level: response.data.higher_level,
        range: response.data.range,
        components: response.data.components,
        material: response.data.material,
        area_of_effect: response.data.area_of_effect,
        ritual: response.data.ritual,
        duration: response.data.duration,
        concentration: response.data.concentration,
        casting_time: response.data.casting_time,
        level: response.data.level,
        attack_type: response.data.attack_type,
        damage: response.data.damage,
        school: response.data.school,
        classes: response.data.classes,
        subclasses: response.data.subclasses,
      };

      return Promise.resolve(spellData);
    } catch (error) {
      throw error;
    }
  }
}
