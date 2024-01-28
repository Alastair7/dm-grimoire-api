import { DamageType } from "../damage_types/damageTypesModel";

export interface Damage {
  damage_dice: string;
  damage_type: DamageType;
}
