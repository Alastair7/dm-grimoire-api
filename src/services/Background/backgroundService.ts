import { GetAllBackgroundResponse } from "../../models/D&D/backgrounds/getAllBackgroundsResponseModel";
import { iBackgroundService } from "./iBackgroundService";
import { GetBackgroundResponse } from "../../models/D&D/backgrounds/getBackgroundResponseModel";
import { inject, injectable } from "inversify";
import { IDndService } from "../../third-party/d&d/IDndService";
import TYPES from "../../utils/DI/types";
import { ApiRequestTypes } from "../../common/enums/apiRequestTypes";

@injectable()
export class BackgroundService implements iBackgroundService {
  private _dndService: IDndService;

  constructor(@inject(TYPES.IDndService) dndService: IDndService) {
    this._dndService = dndService;
  }

  async getAllBackgrounds(): Promise<GetAllBackgroundResponse> {
    const response: GetAllBackgroundResponse = await this._dndService.getAll(
      ApiRequestTypes.BACKGROUND
    );

    return response;
  }

  async getBackground(index: string): Promise<GetBackgroundResponse> {
    const response: GetBackgroundResponse = await this._dndService.get(
      index,
      ApiRequestTypes.BACKGROUND
    );

    return response;
  }
}
