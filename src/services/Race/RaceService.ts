import { GetRaceResponse } from "../../models/D&D/races/getRaceResponseModel";
import { GetRacesResponse } from "../../models/D&D/races/getRacesResponseModel";
import { IRaceService } from "./iRaceService";
import { inject, injectable } from "inversify";
import { IDndService } from "../../third-party/d&d/IDndService";
import TYPES from "../../utils/DI/types";
import { ApiRequestTypes } from "../../common/enums/apiRequestTypes";

@injectable()
export class RaceService implements IRaceService {
  public _dndService: IDndService;

  constructor(@inject(TYPES.IDndService) dndService: IDndService) {
    this._dndService = dndService;
  }

  async getRaces(): Promise<GetRacesResponse> {
    const response: GetRacesResponse = await this._dndService.getAll(
      ApiRequestTypes.RACE
    );

    return response;
  }
  async getRace(index: string): Promise<GetRaceResponse> {
    const response: GetRaceResponse = await this._dndService.get(
      index,
      ApiRequestTypes.RACE
    );

    return response;
  }
}
