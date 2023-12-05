export interface Background {
  index: string;
  name: string;
  starting_proficiencies?: Proficiency[];
  language_options?: LanguageOptions;
  starting_equipment?: EquipmentItem[];
  starting_equipment_options?: EquipmentOptions[];
  feature?: Feature;
  personality_traits?: TraitOptions;
  ideals?: IdealOptions;
  bonds?: OptionsArray;
  flaws?: OptionsArray;
  url: string;
}

interface Proficiency {
  index?: string;
  name?: string;
  url?: string;
}

interface LanguageOptions {
  choose: number;
  type: string;
  from: ResourceList;
}

interface ResourceList {
  option_set_type: string;
  resource_list_url: string;
}

interface EquipmentItem {
  equipment: Equipment;
  quantity: number;
}

interface Equipment {
  index: string;
  name: string;
  url: string;
}

interface EquipmentOptions {
  choose: number;
  type: string;
  from: EquipmentCategory;
}

interface EquipmentCategory {
  option_set_type: string;
  equipment_category: Equipment;
}

interface Feature {
  name?: string;
  desc?: string[];
}

interface TraitOptions {
  choose: number;
  type: string;
  from: OptionsArray;
}

interface IdealOptions {
  choose: number;
  type: string;
  from: IdealArray;
}

interface OptionsArray {
  option_set_type: string;
  options: Option[];
}

interface IdealArray {
  option_set_type: string;
  options: Ideal[];
}

interface Option {
  option_type: string;
  string?: string;
}

interface Ideal {
  option_type: string;
  desc: string;
  alignments: Alignment[];
}

interface Alignment {
  index: string;
  name: string;
  url: string;
}
