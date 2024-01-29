import { GetEquipmentResponse } from "../../models/D&D/equipment/getEquipmentResponseModel";
import { IEquipmentService } from "./iEquipmentService";
import { GetAllEquipmentResponse } from "../../models/D&D/equipment/getAllEquipmentResponseModel";
import { inject, injectable } from "inversify";
import { IDndService } from "../../third-party/d&d/IDndService";
import TYPES from "../../utils/DI/types";
import { ApiRequestTypes } from "../../common/enums/apiRequestTypes";

@injectable()
export class EquipmentService implements IEquipmentService {
  private _dndService: IDndService;

  constructor(@inject(TYPES.IDndService) dndService: IDndService) {
    this._dndService = dndService;
  }

  async getAllEquipment(): Promise<GetAllEquipmentResponse> {
    const response: GetAllEquipmentResponse = await this._dndService.getAll(
      ApiRequestTypes.EQUIPMENT
    );

    return response;
  }
  async getEquipment(index: string): Promise<GetEquipmentResponse> {
    const response: GetEquipmentResponse = await this._dndService.get(
      index,
      ApiRequestTypes.EQUIPMENT
    );

    return response;
  }
}
