import { BaseModel } from "../common/baseModel";

export interface Skill extends BaseModel {
  desc?: string[];
  ability_score?: AbilityScore;
}

interface AbilityScore {
  index?: string;
  name?: string;
}
