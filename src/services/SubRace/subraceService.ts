import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetSubraceResponse } from "../../models/D&D/subraces/getSubraceResponseModel";
import { GetSubracesResponse } from "../../models/D&D/subraces/getSubracesResponseModel";
import { ISubraceService } from "./iSubraceService";

export class SubraceService implements ISubraceService {
  async getSubraces(): Promise<GetSubracesResponse> {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };

      const response: AxiosResponse<GetSubracesResponse> = await axios.get(
        "https://www.dnd5eapi.co/api/subraces",
        requestConfig
      );

      const subracesData: GetSubracesResponse = response.data;

      return Promise.resolve(subracesData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getSubrace(index: string): Promise<GetSubraceResponse> {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };

      const response: AxiosResponse<GetSubraceResponse> = await axios.get(
        `https://www.dnd5eapi.co/api/subraces/${index}`,
        requestConfig
      );

      const subracesData: GetSubraceResponse = response.data;

      return Promise.resolve(subracesData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
