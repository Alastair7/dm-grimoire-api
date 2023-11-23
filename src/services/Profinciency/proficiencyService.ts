import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetAllProficienciesResponse } from "../../models/D&D/proficiencies/getAllProficienciesResponseModel";
import { GetProficiencyResponse } from "../../models/D&D/proficiencies/getProficiencyResponseModel";
import { IProficiencyService } from "./iProficiencyService";

export class ProficiencyService implements IProficiencyService{
  async getAllProficiencies(): Promise<GetAllProficienciesResponse>  {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
    };
    const response: AxiosResponse<GetAllProficienciesResponse> = await axios.get(
      "https://www.dnd5eapi.co/api/proficiencies",
      requestConfig
    );
    const proficienciesData: GetAllProficienciesResponse = {
      count: response.data.count,
      results: response.data.results.map((proficienciesInfo) => ({
        index: proficienciesInfo.index,
        name: proficienciesInfo.name,
        type: proficienciesInfo.type,
      })),
    };

    return Promise.resolve(proficienciesData);
    }catch (error) {
      throw error;
    }  
  };

  async getProficiency(name: string): Promise<GetProficiencyResponse>{
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };
  
      const response: AxiosResponse<GetProficiencyResponse> = await axios.get(
        `https://www.dnd5eapi.co/api/proficiencies/${name}`,
        requestConfig
      );
      const proficiencyData = {
        index: response.data.index,
        name: response.data.name,
        type: response.data.type,
      };
      
      return Promise.resolve(proficiencyData); 
    } catch (error) {
      throw error;
    }
  };
}
