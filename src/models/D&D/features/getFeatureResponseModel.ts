import { BaseModel } from "../common/baseModel";

export interface GetFeatureResponseModel extends BaseModel {
  class: ClassInfo;
  level: number;
  prerequisites: any[];
  desc: string[];
}
export interface ClassInfo extends BaseModel {}
