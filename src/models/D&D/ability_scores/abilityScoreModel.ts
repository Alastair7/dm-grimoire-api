import { BaseModel } from "../common/baseModel";

export interface AbilityScore extends BaseModel {
  full_name?: string;
  desc?: string[];
  skills?: AbilityScoreSkill[];
}

export interface AbilityScoreSkill extends BaseModel {}
