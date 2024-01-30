import { GetSubraceResponse } from "../../models/D&D/subraces/getSubraceResponseModel";
import { GetSubracesResponse } from "../../models/D&D/subraces/getSubracesResponseModel";
import { ISubraceService } from "./iSubraceService";
import { IDndService } from "../../third-party/d&d/IDndService";
import { inject, injectable } from "inversify";
import TYPES from "../../utils/DI/types";
import { ApiRequestTypes } from "../../common/enums/apiRequestTypes";

@injectable()
export class SubraceService implements ISubraceService {
  private _dndService: IDndService;

  constructor(@inject(TYPES.IDndService) dndService: IDndService) {
    this._dndService = dndService;
  }

  async getSubraces(): Promise<GetSubracesResponse> {
    const response: GetSubracesResponse = await this._dndService.getAll(
      ApiRequestTypes.SUB_RACE
    );

    return response;
  }
  async getSubrace(index: string): Promise<GetSubraceResponse> {
    const response: GetSubraceResponse = await this._dndService.get(
      index,
      ApiRequestTypes.SUB_RACE
    );

    return response;
  }
}
