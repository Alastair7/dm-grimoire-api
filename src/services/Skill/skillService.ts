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
  getSkill(index: string): Promise<GetSkillResponse> {
    throw new Error("Method not implemented.");
  }
}
