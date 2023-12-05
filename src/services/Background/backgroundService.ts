import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetAllBackgroundResponse } from "../../models/D&D/backgrounds/getAllBackgroundsResponseModel";
import { iBackgroundService } from "./iBackgroundService";
import { GetBackgroundResponse } from "../../models/D&D/backgrounds/getBackgroundResponseModel";

export class BackgroundService implements iBackgroundService{
  async getAllBackgrounds(): Promise<GetAllBackgroundResponse>{
    try{
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };
      const response: AxiosResponse<GetAllBackgroundResponse> = await axios.get(
        "https://www.dnd5eapi.co/api/backgrounds",
        requestConfig
      );
      const backgroundsData: GetAllBackgroundResponse = {
        count: response.data.count,
        results: response.data.results.map((backgroundInfo) => ({
            index: backgroundInfo.index,
            name: backgroundInfo.name,
            url: backgroundInfo.url,   
        })),
      };
      return Promise.resolve(backgroundsData);
    }catch(error){ throw error;} 
  }
  async getBackground(index: string): Promise<GetBackgroundResponse> {
    try{
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };
      const response: AxiosResponse<GetBackgroundResponse> = await axios.get(
        `https://www.dnd5eapi.co/api/backgrounds/${index}`,
        requestConfig
      );
      const backgroundData: GetBackgroundResponse = {
        index: response.data.index,
        name: response.data.name,
        starting_proficiencies: response.data.starting_proficiencies?.map((proficiencyInfo) => ({
          index: proficiencyInfo.index,
          name: proficiencyInfo.name,
          url: proficiencyInfo.url,
        })),
        language_options: response.data.language_options,
        starting_equipment: response.data.starting_equipment?.map((equipmentInfo) => ({
          equipment: {
            index: equipmentInfo.equipment.index,
            name: equipmentInfo.equipment.name,
            url: equipmentInfo.equipment.url,
          },
          quantity: equipmentInfo.quantity,
        })),
        starting_equipment_options: response.data.starting_equipment_options?.map((equipmentOptionsInfo) => ({
          choose: equipmentOptionsInfo.choose,
          type: equipmentOptionsInfo.type,
          from: {
            option_set_type: equipmentOptionsInfo.from.option_set_type,
            equipment_category: {
              index: equipmentOptionsInfo.from.equipment_category.index,
              name: equipmentOptionsInfo.from.equipment_category.name,
              url: equipmentOptionsInfo.from.equipment_category.url,
            },
          },
        })),
        feature: {
          name: response.data.feature?.name,
          desc: response.data.feature?.desc,
        },
        personality_traits: response.data.personality_traits,
        ideals: response.data.ideals,
        bonds: response.data.bonds,
        flaws: response.data.flaws,
        url: response.data.url,
      };
      return Promise.resolve(backgroundData);
    }catch(error){ throw error;}
  }
}