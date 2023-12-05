import { GetSubraceResponse } from "../../models/D&D/subraces/getSubraceResponseModel";
import { GetSubracesResponse } from "../../models/D&D/subraces/getSubracesResponseModel";

export interface ISubraceService {
  getSubraces(): Promise<GetSubracesResponse>;
  getSubrace(index: string): Promise<GetSubraceResponse>;
}
