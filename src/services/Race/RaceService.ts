import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetRaceResponse } from "../../models/D&D/races/getRaceResponseModel";
import { GetRacesResponse } from "../../models/D&D/races/getRacesResponseModel";
import { IRaceService } from "./iRaceService";

export class RaceService implements IRaceService {
  async getRaces(): Promise<GetRacesResponse> {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };

      const response: AxiosResponse<GetRacesResponse> = await axios.get(
        "https://www.dnd5eapi.co/api/races",
        requestConfig
      );

      const raceData: GetRacesResponse = response.data;

      return Promise.resolve(raceData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getRace(index: string): Promise<GetRaceResponse> {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };

      const response: AxiosResponse<GetRaceResponse> = await axios.get(
        `https://www.dnd5eapi.co/api/races/${index}`,
        requestConfig
      );

      const raceData: GetRaceResponse = response.data;
      return Promise.resolve(raceData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
