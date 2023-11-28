export interface AbilityScoreProficiency {
  index: string;
  name: string;
  desc: string[];
  ability_score: RelatedAbilityScore;
}

export interface RelatedAbilityScore {
  index: string;
  name: string;
}