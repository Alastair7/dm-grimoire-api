import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetMonsterResponse } from "../../models/D&D/monsters/getMonsterResponseModel";
import { GetMonstersResponse } from "../../models/D&D/monsters/getMonstersResponseModel";
import { IMonsterService } from "./iMonsterService";

export class MonsterService implements IMonsterService {
  async getMonsters(): Promise<GetMonstersResponse> {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };

      const response: AxiosResponse<GetMonstersResponse> = await axios.get(
        "https://www.dnd5eapi.co/api/monsters",
        requestConfig
      );

      const monstersData: GetMonstersResponse = response.data;

      return Promise.resolve(monstersData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getMonster(index: string): Promise<GetMonsterResponse> {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };

      const response: AxiosResponse<GetMonsterResponse> = await axios.get(
        `https://www.dnd5eapi.co/api/monsters/${index}`,
        requestConfig
      );

      const monsterData = response.data as GetMonsterResponse;

      return Promise.resolve(monsterData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
