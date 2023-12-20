import { Equipment } from "./equipmentModel";

export interface GetAllEquipmentResponse {
  count: number;
  results: Equipment[];
}
