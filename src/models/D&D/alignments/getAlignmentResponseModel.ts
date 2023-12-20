import { BaseModel } from "../common/baseModel";

export interface GetAlignmentResponse extends BaseModel {
  abbreviation: string;
  desc: string;
}
