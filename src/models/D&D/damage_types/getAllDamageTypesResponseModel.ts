import { DamageType } from "./damageTypesModel";

export interface GetAllDamageTypesResponse {
  count: number;
  results: DamageType[];
}
