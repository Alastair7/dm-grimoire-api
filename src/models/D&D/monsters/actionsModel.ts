import { AbilityScore } from "../ability_scores/abilityScoreModel";
import { Alignment } from "../alignments/alignmentModel";

interface OptionSetBase {
  option_set_type: string;
}

interface OptionBase {
  option_type: string;
}

interface OptionItem extends OptionBase {
  item: Item;
}

interface OptionAction extends OptionBase {
  action_name: string;
  count: number;
  type: "melee" | "ranged" | "ability" | "magic";
}

interface OptionRecursiveItems extends OptionBase {
  items: Option;
}
interface OptionRecursiveChoice extends OptionBase {
  choice: Choice;
}

interface OptionString extends OptionBase {
  string: string;
}

interface OptionAlignments extends OptionBase {
  desc: string;
  alignments: Alignment[];
}

interface OptionOf extends OptionBase {
  count: number;
  of: Of;
}

interface OptionMinimumScore extends OptionBase {
  ability_score: AbilityScore;
  minimum_score: number;
}

interface OptionBonus extends OptionBase {
  ability_score: AbilityScore;
  bonus: number;
}

interface OptionDamage extends OptionSetBase {
  name: string;
  dc: DC;
  damage: Damage[];
}

interface OptionNotes extends OptionSetBase {
  damage_type: DamageType;
  damage_dice: string;
  notes: string;
}

type Option =
  | OptionItem
  | OptionAction
  | OptionRecursiveItems
  | OptionRecursiveChoice
  | OptionString
  | OptionAlignments
  | OptionOf
  | OptionMinimumScore
  | OptionDamage
  | OptionBonus
  | OptionNotes;

interface OptionSetOptions extends OptionSetBase {
  options_array: Option[];
}

interface OptionSetEquipmentCategory extends OptionSetBase {
  equipment_category: EquipmentCategory;
}

interface OptionSetResourceList extends OptionSetBase {
  resource_list: string;
}

type OptionSet =
  | OptionSetOptions
  | OptionSetEquipmentCategory
  | OptionSetResourceList;

export interface Choice {
  desc: string;
  choose: number;
  type: string;
  from: OptionSet;
}

interface Item {
  index: string;
  name: string;
}

interface Of {
  index: string;
  name: string;
}

export interface DC {
  dc_type: DCType;
  dc_value: number;
  success_type: string;
}

interface DCType {
  index: string;
  name: string;
}

export interface Damage {
  damage_dice: string;
  damage_type: DamageType;
}
