import { BaseModel } from "../common/baseModel";
import { Equipment } from "../equipment/equipmentModel";

export interface EquipmentCategory extends BaseModel {
  equipment?: Equipment[];
}
