import { Condition } from "./conditionModel";

export interface GetConditionsResponse {
  count: number;
  results: Condition[];
}
