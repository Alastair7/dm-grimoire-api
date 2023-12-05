import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetConditionsResponse } from "../../models/D&D/conditions/getConditionsResponseModel";
import { IConditionService } from "./iConditionService";
import { GetConditionResponse } from "../../models/D&D/conditions/getConditionResponseModel";

export class ConditionService implements IConditionService {
  async getConditions(): Promise<GetConditionsResponse> {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };

      const response: AxiosResponse<GetConditionsResponse> = await axios.get(
        "https://www.dnd5eapi.co/api/conditions",
        requestConfig
      );

      const conditionsData: GetConditionsResponse = response.data;

      return Promise.resolve(conditionsData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getCondition(index: string): Promise<GetConditionResponse> {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };

      const response: AxiosResponse<GetConditionResponse> = await axios.get(
        `https://www.dnd5eapi.co/api/conditions/${index}`,
        requestConfig
      );

      const conditionData: GetConditionResponse = response.data;

      return Promise.resolve(conditionData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
