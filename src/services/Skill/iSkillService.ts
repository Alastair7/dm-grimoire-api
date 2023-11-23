import { GetSkillResponse } from "../../models/D&D/skills/getSkillResponseModel";
import { GetSkillsResponse } from "../../models/D&D/skills/getSkillsResponseModel";

export interface ISkillService {
  getSkills(): Promise<GetSkillsResponse>;
  getSkill(index: string): Promise<GetSkillResponse>;
}
