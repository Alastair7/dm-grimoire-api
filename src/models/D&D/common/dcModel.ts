import { BaseModel } from "./baseModel";

export interface DC {
  dc_type: DCType;
  dc_value: number;
  success_type: string;
}

interface DCType extends BaseModel {}
