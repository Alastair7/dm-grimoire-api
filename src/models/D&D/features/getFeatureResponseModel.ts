export interface GetFeatureResponseModel{
  index: string;
  class: ClassInfo;
  name: string;
  level: number;
  prerequisites: any[];
  desc: string[];
  url: string;
}
export interface ClassInfo {
  index: string;
  name: string;
  url: string;
}