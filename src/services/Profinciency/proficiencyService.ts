import { GetAllProficienciesResponse } from "../../models/D&D/proficiencies/getAllProficienciesResponseModel";
import { GetProficiencyResponse } from "../../models/D&D/proficiencies/getProficiencyResponseModel";
import { IProficiencyService } from "./iProficiencyService";
import { inject, injectable } from "inversify";
import { IDndService } from "../../third-party/d&d/IDndService";
import TYPES from "../../utils/DI/types";
import { ApiRequestTypes } from "../../common/enums/apiRequestTypes";

@injectable()
export class ProficiencyService implements IProficiencyService {
  private _dndService: IDndService;

  constructor(@inject(TYPES.IDndService) dndService: IDndService) {
    this._dndService = dndService;
  }

  async getAllProficiencies(): Promise<GetAllProficienciesResponse> {
    const response: GetAllProficienciesResponse = await this._dndService.getAll(
      ApiRequestTypes.PROFICIENCY
    );

    return response;
  }

  async getProficiency(index: string): Promise<GetProficiencyResponse> {
    const response: GetProficiencyResponse = await this._dndService.get(
      index,
      ApiRequestTypes.PROFICIENCY
    );

    return response;
  }
}
