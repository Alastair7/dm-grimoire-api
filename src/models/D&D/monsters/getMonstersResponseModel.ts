import { BaseModel } from "../common/baseModel";

export interface GetMonstersResponse {
  count: number;
  results: MonstersResult[];
}

interface MonstersResult extends BaseModel {}
