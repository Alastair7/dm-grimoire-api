import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetSpellsResponseModel } from "../../models/D&D/spells/getSpellsResponseModel";
import { GetSpellResponseModel } from "../../models/D&D/spells/getSpellResponseModel";

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

      console.log("SpellService:", index);

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
        damage: {
          damage_type: {
            index: response.data.damage?.damage_type?.index,
            name: response.data.damage?.damage_type?.name,
          },
          damage_at_slot_level: {
            2: response.data.damage?.damage_at_slot_level?.[2],
            3: response.data.damage?.damage_at_slot_level?.[3],
            4: response.data.damage?.damage_at_slot_level?.[4],
            5: response.data.damage?.damage_at_slot_level?.[5],
            6: response.data.damage?.damage_at_slot_level?.[6],
            7: response.data.damage?.damage_at_slot_level?.[7],
            8: response.data.damage?.damage_at_slot_level?.[8],
            9: response.data.damage?.damage_at_slot_level?.[9],
          },
        },
        school: {
          index: response.data.school?.index,
          name: response.data.school?.name,
        },
        classes: response.data.classes?.map((classInfo) => ({
          index: classInfo.index,
          name: classInfo.name,
        })),
        subclasses: response.data.subclasses?.map((subClassInfo) => ({
          index: subClassInfo.index,
          name: subClassInfo.name,
        })),
      };

      return Promise.resolve(spellData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
