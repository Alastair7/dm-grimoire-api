import { Choice } from "../common/choiceModel";
import { Damage } from "../common/damageModel";
import { DC } from "../common/dcModel";
import { OptionSet } from "../common/optionSetModel";

export interface Trait {
  index: string;
  name: string;
  url: string;
  desc: string[];
  races: Races[];
  subraces: SubRaces[];
  proficiencies: Proficiencies[];
  proficiency_choices: Choice;
  language_options: Choice;
  trait_specific: TraitSpecific;
}

interface Races {
  index: string;
  name: string;
  url: string;
}

interface SubRaces {
  index: string;
  name: string;
  url: string;
}

interface Proficiencies {
  index: string;
  name: string;
  url: string;
}

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
