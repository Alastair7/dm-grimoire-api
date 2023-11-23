import { GetSkillResponse } from "../../models/D&D/skills/getSkillResponseModel";
import { GetSkillsResponse } from "../../models/D&D/skills/getSkillsResponseModel";
import { ISkillService } from "./iSkillService";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export class SkillService implements ISkillService {
  async getSkills(): Promise<GetSkillsResponse> {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };

      const response: AxiosResponse<GetSkillsResponse> = await axios.get(
        "https://www.dnd5eapi.co/api/skills",
        requestConfig
      );

      const skillsData: GetSkillsResponse = {
        count: response.data.count,
        results: response.data.results.map((skillInfo) => ({
          index: skillInfo.index,
          name: skillInfo.name,
        })),
      };

      return Promise.resolve(skillsData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getSkill(index: string): Promise<GetSkillResponse> {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };

      const response: AxiosResponse<GetSkillResponse> = await axios.get(
        `https://www.dnd5eapi.co/api/skills/${index}`,
        requestConfig
      );

      const skillData: GetSkillResponse = {
        index: response.data.index,
        name: response.data.name,
        desc: response.data.desc,
        ability_score: {
          index: response.data.ability_score?.index,
          name: response.data.ability_score?.name,
        },
      };

      return Promise.resolve(skillData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
