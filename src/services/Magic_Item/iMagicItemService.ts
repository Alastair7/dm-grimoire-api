import { GetMagicItemResponse } from "../../models/D&D/magic-items/getMagicItemResponseModel";
import { GetMagicItemsResponse } from "../../models/D&D/magic-items/getMagicItemsResponseModel";

export interface IMagicItemService {
  getMagicItems(): Promise<GetMagicItemsResponse>;
  getMagicItem(index: string): Promise<GetMagicItemResponse>;
}
