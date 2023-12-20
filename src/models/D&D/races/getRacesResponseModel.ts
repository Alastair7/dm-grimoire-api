import { BaseModel } from "../common/baseModel";

export interface GetRacesResponse {
  count: number;
  results: Races[];
}

interface Races extends BaseModel {}
