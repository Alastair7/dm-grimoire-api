import { inject, injectable } from "inversify";
import { GetClassesResponse } from "../../models/D&D/classes/getClassesResponseModel";
import { GetSingleClassResponse } from "../../models/D&D/classes/getSingleClassResponseModel";
import { IClassService } from "./iClassService";
import { IDndService } from "../../third-party/d&d/IDndService";
import TYPES from "../../utils/DI/types";
import { ApiRequestTypes } from "../../common/enums/apiRequestTypes";

@injectable()
export class ClassService implements IClassService {
  private _dndService: IDndService;

  constructor(@inject(TYPES.IDndService) dndService: IDndService) {
    this._dndService = dndService;
  }

  async getClasses(): Promise<GetClassesResponse> {
    const response: GetClassesResponse = await this._dndService.getAll(
      ApiRequestTypes.CLASS
    );

    return response;
  }
  async getClass(index: string): Promise<GetSingleClassResponse> {
    const response: GetSingleClassResponse = await this._dndService.get(
      index,
      ApiRequestTypes.CLASS
    );

    return response;
  }
}
