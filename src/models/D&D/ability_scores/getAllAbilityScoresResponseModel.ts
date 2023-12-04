import { AbilityScore } from "./abilityScoreModel";

export interface GetAllAbilityScoresResponse {
  count: number;
  results: AbilityScore[];
}