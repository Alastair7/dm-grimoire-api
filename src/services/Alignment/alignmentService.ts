import { GetAlignmentResponse } from "../../models/D&D/alignments/getAlignmentResponseModel";
import { GetAllAlignmentsResponse } from "../../models/D&D/alignments/getAllAlignmentsResponseModel";
import { inject, injectable } from "inversify";
import { IDndService } from "../../third-party/d&d/IDndService";
import TYPES from "../../utils/DI/types";
import { ApiRequestTypes } from "../../common/enums/apiRequestTypes";
import { IAlignmentService } from "./iAlignmentService";

@injectable()
export class AlignmentService implements IAlignmentService {
  private _dndService: IDndService;

  constructor(@inject(TYPES.IDndService) dndService: IDndService) {
    this._dndService = dndService;
  }

  async getAllAlignments(): Promise<GetAllAlignmentsResponse> {
    const response: GetAllAlignmentsResponse = await this._dndService.getAll(
      ApiRequestTypes.ALIGNMENT
    );

    return response;
  }

  async getAlignment(index: string): Promise<GetAlignmentResponse> {
    const response: GetAlignmentResponse = await this._dndService.get(
      index,
      ApiRequestTypes.ALIGNMENT
    );

    return response;
  }
}
