import { GetConditionsResponse } from "../../models/D&D/conditions/getConditionsResponseModel";
import { IConditionService } from "./iConditionService";
import { GetConditionResponse } from "../../models/D&D/conditions/getConditionResponseModel";
import { IDndService } from "../../third-party/d&d/IDndService";
import { inject, injectable } from "inversify";
import TYPES from "../../utils/DI/types";
import { ApiRequestTypes } from "../../common/enums/apiRequestTypes";

@injectable()
export class ConditionService implements IConditionService {
  private _dndService: IDndService;

  constructor(@inject(TYPES.IDndService) dndService: IDndService) {
    this._dndService = dndService;
  }

  async getConditions(): Promise<GetConditionsResponse> {
    const response: GetConditionsResponse = await this._dndService.getAll(
      ApiRequestTypes.CONDITION
    );

    return response;
  }
  async getCondition(index: string): Promise<GetConditionResponse> {
    const response: GetConditionResponse = await this._dndService.get(
      index,
      ApiRequestTypes.CONDITION
    );

    return response;
  }
}
