import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetEquipmentResponse } from "../../models/D&D/equipment/getEquipmentResponseModel";
import { IEquipmentService } from "./iEquipmentService";
import { GetAllEquipmentResponse } from "../../models/D&D/equipment/getAllEquipmentResponseModel";

export class EquipmentService implements IEquipmentService {
  async getAllEquipment(): Promise<GetAllEquipmentResponse> {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };

      const response: AxiosResponse<GetAllEquipmentResponse> = await axios.get(
        "https://www.dnd5eapi.co/api/equipment",
        requestConfig
      );

      const equipmentData: GetAllEquipmentResponse = {
        count: response.data.count,
        results: response.data.results.map((equipmentInfo) => ({
          index: equipmentInfo.index,
          name: equipmentInfo.name,
        })),
      };

      return Promise.resolve(equipmentData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getEquipment(index: string): Promise<GetEquipmentResponse> {
    throw new Error("Method not implemented.");
  }
}
