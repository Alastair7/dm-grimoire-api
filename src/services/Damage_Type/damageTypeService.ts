import { GetAllDamageTypesResponse } from "../../models/D&D/damage_types/getAllDamageTypesResponseModel";
import { GetDamageTypeResponse } from "../../models/D&D/damage_types/getDamageTypeResponseModel";
import { IDamageTypeService } from "./iDamageTypeService";
import { IDndService } from "../../third-party/d&d/IDndService";
import { inject, injectable } from "inversify";
import TYPES from "../../utils/DI/types";
import { ApiRequestTypes } from "../../common/enums/apiRequestTypes";

@injectable()
export class DamageTypeService implements IDamageTypeService {
  private _dndService: IDndService;

  constructor(@inject(TYPES.IDndService) dndService: IDndService) {
    this._dndService = dndService;
  }
  async getAllDamageTypes(): Promise<GetAllDamageTypesResponse> {
    const response: GetAllDamageTypesResponse = await this._dndService.getAll(
      ApiRequestTypes.DAMAGE_TYPE
    );

    return response;
  }

  async getDamageType(index: string): Promise<GetDamageTypeResponse> {
    const response: GetDamageTypeResponse = await this._dndService.get(
      index,
      ApiRequestTypes.DAMAGE_TYPE
    );

    return response;
  }
}
