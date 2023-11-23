import { Skill } from "./skillModel";

export interface GetSkillsResponse {
  count: number;
  results: Skill[];
}
