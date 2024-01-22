import { GetAllAbilityScoresResponse } from "../../models/D&D/ability_scores/getAllAbilityScoresResponseModel";
import { iAbilityScoreService } from "./iAbilityScoreService";
import { GetAbilityScoreResponse } from "../../models/D&D/ability_scores/getAbilityScoreResponseModel";
import { IDndService } from "../../third-party/d&d/IDndService";
import { ApiRequestTypes } from "../../common/enums/apiRequestTypes";
import { inject, injectable } from "inversify";
import TYPES from "../../utils/DI/types";

@injectable()
export class AbilityScoreService implements iAbilityScoreService {
  private _dndService: IDndService;

  constructor(@inject(TYPES.IDndService) dndService: IDndService) {
    this._dndService = dndService;
  }

  async getAllAbilityScores(): Promise<GetAllAbilityScoresResponse> {
    const response: GetAllAbilityScoresResponse = await this._dndService.getAll(
      ApiRequestTypes.ABILITY_SCORE
    );

    return response;
  }
  async getAbilityScore(index: string): Promise<GetAbilityScoreResponse> {
    const response: GetAbilityScoreResponse = await this._dndService.get(
      index,
      ApiRequestTypes.ABILITY_SCORE
    );

    return response;
  }
}
