import { GetTraitResponse } from "../../models/D&D/traits/getTraitResponseModel";
import { GetTraitsResponse } from "../../models/D&D/traits/getTraitsResponseModel";

export interface ITraitService {
  getTraits(): Promise<GetTraitsResponse>;
  getTrait(index: string): Promise<GetTraitResponse>;
}
