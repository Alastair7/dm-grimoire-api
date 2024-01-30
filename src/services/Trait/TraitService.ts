import { GetTraitResponse } from "../../models/D&D/traits/getTraitResponseModel";
import { GetTraitsResponse } from "../../models/D&D/traits/getTraitsResponseModel";
import { ITraitService } from "./ITraitService";
import { IDndService } from "../../third-party/d&d/IDndService";
import { inject, injectable } from "inversify";
import TYPES from "../../utils/DI/types";
import { ApiRequestTypes } from "../../common/enums/apiRequestTypes";

@injectable()
export class TraitService implements ITraitService {
  private _dndService: IDndService;

  constructor(@inject(TYPES.IDndService) dndService: IDndService) {
    this._dndService = dndService;
  }

  async getTraits(): Promise<GetTraitsResponse> {
    const response: GetTraitsResponse = await this._dndService.getAll(
      ApiRequestTypes.TRAIT
    );

    return response;
  }
  async getTrait(index: string): Promise<GetTraitResponse> {
    const response: GetTraitResponse = await this._dndService.get(
      index,
      ApiRequestTypes.TRAIT
    );

    return response;
  }
}
