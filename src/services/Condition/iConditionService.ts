import { GetConditionResponse } from "../../models/D&D/conditions/getConditionResponseModel";
import { GetConditionsResponse } from "../../models/D&D/conditions/getConditionsResponseModel";

export interface IConditionService {
  getConditions(): Promise<GetConditionsResponse>;
  getCondition(index: string): Promise<GetConditionResponse>;
}
