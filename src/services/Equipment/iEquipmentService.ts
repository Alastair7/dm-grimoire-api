import { GetAllEquipmentResponse } from "../../models/D&D/equipment/getAllEquipmentResponseModel";
import { GetEquipmentResponse } from "../../models/D&D/equipment/getEquipmentResponseModel";

export interface IEquipmentService {
  getAllEquipment(): Promise<GetAllEquipmentResponse>;
  getEquipment(index: string): Promise<GetEquipmentResponse>;
}
