export interface Skill {
  index: string;
  name: string;
  desc?: string[];
  ability_score?: AbilityScore;
}

interface AbilityScore {
  index?: string;
  name?: string;
}
