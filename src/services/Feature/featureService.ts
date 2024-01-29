import { GetAllFeaturesResponseModel } from "../../models/D&D/features/getAllFeaturesResponseModel";
import { IFeatureService } from "./iFeatureService";
import { GetFeatureResponseModel } from "../../models/D&D/features/getFeatureResponseModel";
import { IDndService } from "../../third-party/d&d/IDndService";
import { inject, injectable } from "inversify";
import TYPES from "../../utils/DI/types";
import { ApiRequestTypes } from "../../common/enums/apiRequestTypes";

@injectable()
export class FeatureService implements IFeatureService {
  private _dndService: IDndService;

  constructor(@inject(TYPES.IDndService) dndService: IDndService) {
    this._dndService = dndService;
  }
  async getFeatures(): Promise<GetAllFeaturesResponseModel> {
    const response: GetAllFeaturesResponseModel = await this._dndService.getAll(
      ApiRequestTypes.FEATURE
    );

    return response;
  }

  async getFeature(index: string): Promise<GetFeatureResponseModel> {
    const response: GetFeatureResponseModel = await this._dndService.get(
      index,
      ApiRequestTypes.FEATURE
    );

    return response;
  }
}
