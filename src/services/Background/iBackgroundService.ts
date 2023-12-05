import { GetAllBackgroundResponse } from "../../models/D&D/backgrounds/getAllBackgroundsResponseModel";
import { GetBackgroundResponse } from "../../models/D&D/backgrounds/getBackgroundResponseModel";

export interface iBackgroundService{
  getAllBackgrounds(): Promise<GetAllBackgroundResponse>;
  getBackground(index: string): Promise<GetBackgroundResponse>;
}