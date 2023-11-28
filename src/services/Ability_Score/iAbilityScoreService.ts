import { GetAbilityScoreResponse } from "../../models/D&D/ability_scores/getAbilityScoreResponseModel";
import { GetAllAbilityScoresResponse } from "../../models/D&D/ability_scores/getAllAbilityScoresResponseModel";

export interface iAbilityScoreService {
  getAllAbilityScores(): Promise<GetAllAbilityScoresResponse>;
  getAbilityScore(index: string): Promise<GetAbilityScoreResponse>;
}