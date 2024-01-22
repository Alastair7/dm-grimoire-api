import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { IDndService } from "./IDndService";
import { ApiRequestTypes } from "../../common/enums/apiRequestTypes";

export class DndService implements IDndService {
  readonly baseURL;
  readonly requestConfig: AxiosRequestConfig;

  constructor() {
    this.baseURL = "https://www.dnd5eapi.co/api/";
    this.requestConfig = {
      headers: { Accept: "application/json" },
      timeout: 30000,
    };
  }

  async get<T>(index: string, requestType: ApiRequestTypes): Promise<T> {
    try {
      const URL = this.createGetAllUrl(requestType);

      const response: AxiosResponse<T> = await axios.get(
        URL + `/${index}`,
        this.requestConfig
      );

      return Promise.resolve(response.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAll<T>(requestType: ApiRequestTypes): Promise<T> {
    try {
      const URL = this.createGetAllUrl(requestType);

      const response: AxiosResponse<T> = await axios.get(
        URL,
        this.requestConfig
      );

      return Promise.resolve(response.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  createGetAllUrl(requestType: ApiRequestTypes) {
    return this.baseURL + `${requestType}`;
  }
}
