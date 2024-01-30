import { IMagicItemService } from "./iMagicItemService";
import { GetMagicItemsResponse } from "../../models/D&D/magic-items/getMagicItemsResponseModel";
import { GetMagicItemResponse } from "../../models/D&D/magic-items/getMagicItemResponseModel";
import { inject, injectable } from "inversify";
import { IDndService } from "../../third-party/d&d/IDndService";
import TYPES from "../../utils/DI/types";
import { ApiRequestTypes } from "../../common/enums/apiRequestTypes";

@injectable()
export class MagicItemService implements IMagicItemService {
  private _dndService: IDndService;

  constructor(@inject(TYPES.IDndService) dndService: IDndService) {
    this._dndService = dndService;
  }

  async getMagicItems(): Promise<GetMagicItemsResponse> {
    const response: GetMagicItemsResponse = await this._dndService.getAll(
      ApiRequestTypes.MAGIC_ITEM
    );

    return response;
  }
  async getMagicItem(index: string): Promise<GetMagicItemResponse> {
    const response: GetMagicItemResponse = await this._dndService.get(
      index,
      ApiRequestTypes.MAGIC_ITEM
    );

    return response;
  }
}
