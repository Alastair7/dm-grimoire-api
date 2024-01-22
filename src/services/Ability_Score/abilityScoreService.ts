import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetAllAbilityScoresResponse } from "../../models/D&D/ability_scores/getAllAbilityScoresResponseModel";
import { iAbilityScoreService } from "./iAbilityScoreService";
import { GetAbilityScoreResponse } from "../../models/D&D/ability_scores/getAbilityScoreResponseModel";
import { IDndService } from "../../third-party/d&d/IDndService";
import { ApiRequestTypes } from "../../common/enums/apiRequestTypes";
import { DndService } from "../../third-party/d&d/DndService";

export class AbilityScoreService implements iAbilityScoreService {
  constructor() {}

  async getAllAbilityScores(): Promise<GetAllAbilityScoresResponse> {
    let dndService: IDndService = new DndService();

    const response: GetAllAbilityScoresResponse = await dndService.getAll(
      ApiRequestTypes.ABILITY_SCORE
    );

    return response;
  }
  async getAbilityScore(index: string): Promise<GetAbilityScoreResponse> {
    let dndService: IDndService = new DndService();

    const response: GetAbilityScoreResponse = await dndService.get(
      index,
      ApiRequestTypes.ABILITY_SCORE
    );

    return response;
  }
}
