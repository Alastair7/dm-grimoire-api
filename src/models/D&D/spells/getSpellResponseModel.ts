import { Class } from "../classes/classModel";
import { BaseModel } from "../common/baseModel";
import { SubClass } from "../subclasses/subClassModel";

export interface GetSpellResponseModel extends BaseModel {
  desc?: string[];
  higher_level?: string[];
  range?: string;
  components?: string;
  material?: string;
  area_of_effect?: AreaOfEffect;
  ritual?: boolean;
  duration?: string;
  concentration?: boolean;
  casting_time?: string;
  level?: number;
  attack_type?: string;
  damage?: Damage;
  school?: MagicSchool;
  classes?: Class[];
  subclasses?: SubClass[];
}

interface AreaOfEffect {
  size?: number;
  type?: string[];
}

interface Damage {
  damage_type?: DamageType;
  damage_at_slot_level?: DamageAtSlotLevel;
}

interface DamageType {
  index?: string;
  name?: string;
}

interface DamageAtSlotLevel {
  2?: string;
  3?: string;
  4?: string;
  5?: string;
  6?: string;
  7?: string;
  8?: string;
  9?: string;
}
