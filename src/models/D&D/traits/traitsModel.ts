import { BaseModel } from "../common/baseModel";
import { Choice } from "../common/choiceModel";
import { Damage } from "../common/damageModel";
import { DC } from "../common/dcModel";
import { OptionSet } from "../common/optionSetModel";
import { DamageType } from "../damage_types/damageTypesModel";

export interface Trait extends BaseModel {
  desc: string[];
  races: Races[];
  subraces: SubRaces[];
  proficiencies: Proficiencies[];
  proficiency_choices: Choice;
  language_options: Choice;
  trait_specific: TraitSpecific;
}

interface Races extends BaseModel {}

interface SubRaces extends BaseModel {}

interface Proficiencies extends BaseModel {}

interface TraitSpecific {
  desc?: string;
  choose?: number;
  type?: string;
  from?: OptionSet;
  damage_type?: DamageType;
  breath_weapon?: BreathWeapon;
}

interface BreathWeapon {
  name: string;
  desc: string;
  area_of_effect: AreaOfEffect;
}

interface AreaOfEffect {
  size: number;
  type: "sphere" | "cone" | "cylinder" | "line" | "cube";
  damage: Damage;
  dc: DC;
  usage: Usage;
}

interface Usage {
  times: number;
  type: string;
}
