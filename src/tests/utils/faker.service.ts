import { injectable } from "inversify";
import { iAbilityScoreService } from "../../services/Ability_Score/iAbilityScoreService";
import { GetAbilityScoreResponse } from "../../models/D&D/ability_scores/getAbilityScoreResponseModel";
import { GetAllAbilityScoresResponse } from "../../models/D&D/ability_scores/getAllAbilityScoresResponseModel";
import { AbilityScore } from "../../models/D&D/ability_scores/abilityScoreModel";

@injectable()
export class FakeAbilityScoreService implements iAbilityScoreService {
  getAllAbilityScores(): Promise<GetAllAbilityScoresResponse> {
    const abilityScoreListMock: AbilityScore[] = [
      { index: "1", name: "Tests" },
    ];

    const mockResponse: GetAllAbilityScoresResponse = {
      count: 1,
      results: abilityScoreListMock,
    };

    return Promise.resolve(mockResponse);
  }
  getAbilityScore(index: string): Promise<GetAbilityScoreResponse> {
    const mockResponse: GetAbilityScoreResponse = {
      index: index,
      name: "Test",
    };

    return Promise.resolve(mockResponse);
  }
}
