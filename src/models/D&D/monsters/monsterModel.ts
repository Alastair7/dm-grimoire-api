import { Choice } from "../common/choiceModel";
import { Damage } from "../common/damageModel";
import { DC } from "../common/dcModel";
import { ArmorClass } from "./armorClassModel";

export interface Monster {
  index: string;
  name: string;
  url: string;
  desc: string[];
  charisma: number;
  constitution: number;
  dexterity: number;
  intelligence: number;
  strength: number;
  wisdom: number;
  image: string;
  size: Sizes;
  type: string;
  subtype: string;
  alignments: Alignments;
  armor_class: ArmorClass[];
  hit_points: number;
  hit_dice: string;
  hit_points_roll: string;
  actions: Action[];
  legendary_actions: Action[];
  challenge_rating: number;
  proficiency_bonus: number;
  condition_inmunities: ConditionInmunities[];
  damage_inmunities: string[];
  damage_resistances: string[];
  damage_vulnerabilities: string[];
  forms: MonsterForm[];
  languages: string;
  proficiencies: Proficiencies[];
  reactions: Action[];
  senses: Senses;
  special_abilities: SpecialAbilities[];
  speed: Speed;
  xp: number;
}

enum Sizes {
  Tiny = "Tiny",
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
  Huge = "Huge",
  Gargantuan = "Gargantuan",
}

enum Alignments {
  ChaoticNeutral = "chaotic neutral",
  ChaoticEvil = "chaotic evil",
  ChaoticGood = "chaotic good",
  LawfulNeutral = "lawful neutral",
  LawfulEvil = "lawful evil",
  LawfulGood = "lawful good",
  Neutral = "neutral",
  NeutralEvil = "neutral evil",
  NeutralGood = "neutral good",
  AnyAlignment = "any alignment",
  Unaligned = "unaligned",
}

interface Action {
  name: string;
  desc: string;
  action_options: Choice;
  actions: Actions[];
  options: Choice;
  multiattack_type: string;
  attack_bonus: number;
  dc: DC;
  attacks: Attack[];
  damage: Damage[];
}

interface Actions {
  action_name: string;
  count: number;
  type: "melee" | "ranged" | "ability" | "magic";
}

interface Attack {
  name: string;
  dc: DC;
  damage: Damage;
}

interface ConditionInmunities {
  index: string;
  name: string;
}

interface MonsterForm {
  index: string;
  name: string;
}

interface Proficiencies {
  value: string;
  proficiency: Proficiency;
}

interface Senses {
  passive_perception: number;
  blindsight: string;
  darkvision: string;
  tremorsense: string;
  truesight: string;
}

interface SpecialAbilities {
  name: string;
  desc: string;
  attack_bonus: number;
  damage: Damage;
  dc: DC;
  spellcasting: SpellCasting;
  usage: SpellUsage;
}

interface SpellCasting {
  ability: Ability;
  dc: number;
  modifier: number;
  components_required: string[];
  school: string;
  slots: Slot;
  spells: MonsterSpell[];
}

interface Ability {
  index: string;
  name: string;
  url: string;
}

interface Slot {
  [anyKey: string]: number;
}

interface MonsterSpell {
  name: string;
  level: number;
  usage: SpellUsage;
}

interface SpellUsage {
  type: "at will" | "per day" | "recharge after rest" | "recharge on roll";
  rest_types: string[];
  times: number;
}

interface Speed {
  walk: string;
  burrow: string;
  climb: string;
  fly: string;
  swim: string;
}
