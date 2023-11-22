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
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };

      const response: AxiosResponse<GetEquipmentResponse> = await axios.get(
        `https://www.dnd5eapi.co/api/equipment/${index}`,
        requestConfig
      );

      const equipmentData: GetEquipmentResponse = {
        desc: response.data.desc,
        index: response.data.index,
        name: response.data.name,
        equipment_category: {
          index: response.data.equipment_category?.index,
          name: response.data.equipment_category?.name,
        },
        weapon_category: response.data.weapon_category,
        weapon_range: response.data.weapon_range,
        category_range: response.data.category_range,
        cost: {
          quantity: response.data.cost?.quantity,
          unit: response.data.cost?.unit,
        },
        damage: {
          damage_dice: response.data.damage?.damage_dice,
          damage_type: {
            index: response.data.damage?.damage_type?.index,
            name: response.data.damage?.damage_type?.name,
            url: response.data.damage?.damage_type?.url,
          },
        },
        range: {
          normal: response.data.range?.normal,
          long: response.data.range?.long,
        },
        weight: response.data.weight,
        properties: response.data.properties?.map((propertyInfo) => ({
          index: propertyInfo.index,
          name: propertyInfo.name,
        })),
        two_handed_damage: {
          damage_dice: response.data.two_handed_damage?.damage_dice,
          damage_type: {
            index: response.data.two_handed_damage?.damage_type?.index,
            name: response.data.two_handed_damage?.damage_type?.name,
            url: response.data.two_handed_damage?.damage_type?.url,
          },
        },
        contents: response.data.contents?.map((contentInfo) => ({
          index: contentInfo?.index,
          name: contentInfo?.name,
        })),
      };

      return Promise.resolve(equipmentData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
