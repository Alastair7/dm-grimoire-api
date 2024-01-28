import { GetAllDamageTypesResponse } from "../../models/D&D/damage_types/getAllDamageTypesResponseModel";
import { GetDamageTypeResponse } from "../../models/D&D/damage_types/getDamageTypeResponseModel";

export interface IDamageTypeService {
  getAllDamageTypes(): Promise<GetAllDamageTypesResponse>;
  getDamageType(index: string): Promise<GetDamageTypeResponse>;
}
