import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetAllAbilityScoresResponse } from "../../models/D&D/ability_scores/getAllAbilityScoresResponseModel";
import { iAbilityScoreService } from "./iAbilityScoreService";
import { GetAbilityScoreResponse } from "../../models/D&D/ability_scores/getAbilityScoreResponseModel";

export class AbilityScoreService implements iAbilityScoreService{
  async getAllAbilityScores(): Promise<GetAllAbilityScoresResponse> {
    try{
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };
      const response: AxiosResponse<GetAllAbilityScoresResponse> = await axios.get(
        "https://www.dnd5eapi.co/api/ability-scores",
        requestConfig
      );
      const abilityScoresData: GetAllAbilityScoresResponse = {
        count: response.data.count,
        results: response.data.results.map((abilityScoreInfo) => ({
          index: abilityScoreInfo.index,
          name: abilityScoreInfo.name,
        })),
      };
      return Promise.resolve(abilityScoresData);
    }catch(error){ throw error;}
  }
  async getAbilityScore(index: string): Promise<GetAbilityScoreResponse> {
    try{
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };
      const response: AxiosResponse<GetAbilityScoreResponse> = await axios.get(
        `https://www.dnd5eapi.co/api/ability-scores/${index}`,
        requestConfig
      );
      const abilityScoreData: GetAbilityScoreResponse = {
        index: response.data.index,
        name: response.data.name,
        full_name: response.data.full_name,
        desc: response.data.desc,
        skills: response.data.skills?.map((skillInfo) => ({
          name: skillInfo.name,
          index: skillInfo.index,
          url: skillInfo.url,
        })),
        url: response.data.url,
      };
      return Promise.resolve(abilityScoreData);
    }catch(error){ throw error;}
  }
}