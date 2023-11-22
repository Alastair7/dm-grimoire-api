export interface GetEquipmentResponse {
  desc?: string[] | null[];
  index: string;
  name: string;
  equipment_category?: EquipmentCategory;
  weapon_category?: string;
  weapon_range?: string;
  category_range?: string;
  cost?: Cost;
  damage?: Damage;
  range?: Range;
  weight?: number;
  properties?: Property[] | null;
  two_handed_damage?: Damage;
  contents?: Content[] | null[];
}

export interface Cost {
  quantity?: number;
  unit?: string;
}
interface Damage {
  damage_dice?: string;
  damage_type?: DamageType;
}
interface Range {
  normal?: number;
  long?: number;
}

interface Property {
  index?: string;
  name?: string;
}

interface Content {
  index?: string;
  name?: string;
}
