import { GetRaceResponse } from "../../models/D&D/races/getRaceResponseModel";
import { GetRacesResponse } from "../../models/D&D/races/getRacesResponseModel";

export interface IRaceService {
  getRaces(): Promise<GetRacesResponse>;
  getRace(index: string): Promise<GetRaceResponse>;
}
