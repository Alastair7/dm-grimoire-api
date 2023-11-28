export interface AbilityScore {
  index: string;
  name: string;
  full_name: string;
  desc: string[];
  skills: AbilityScoreSkill[];
  url: string;
}

export interface AbilityScoreSkill {
  name: string;
  index: string;
  url: string;
}
