import { AbilityScore } from "../ability_scores/abilityScoreModel";
import { Alignment } from "../alignments/alignmentModel";
import { Choice } from "./choiceModel";
import { Damage } from "./damageModel";
import { DC } from "./dcModel";

export interface Option {
  option_tye: string;
  item?: ItemOption;
  action_name?: string;
  count?: number;
  type?: "melee" | "ranged" | "ability" | "magic";
  items?: Option;
  choice?: Choice;
  string?: string;
  desc?: string;
  alignments?: Alignment[];
  of?: OfOption;
  ability_score?: AbilityScore;
  minimum_score?: number;
  bonus?: number;
  name?: string;
  dc?: DC;
  damage?: Damage[];
  damage_type?: DamageType;
  damage_dice?: string;
  notes?: string;
}

interface ItemOption {
  index: string;
  name: string;
  url: string;
}
interface OfOption {
  index: string;
  name: string;
  url: string;
}