import { Spell } from "../spells/spellModel";

interface ArmorClassBase {
  type: "dex" | "natural" | "armor" | "spell" | "condition";
  value: number;
  desc: string;
}

interface ArmorClassDex extends ArmorClassBase {}
interface ArmorClassNatural extends ArmorClassBase {}
interface ArmorClassArmor extends ArmorClassBase {
  armor: Armor;
}
interface ArmorClassSpell extends ArmorClassBase {
  spell: Spell;
}
interface ArmorClassCondition extends ArmorClassBase {
  condition: Condition;
}

interface Armor {
  index: string;
  name: string;
}
interface Condition {
  index: string;
  name: string;
}

export type ArmorClass =
  | ArmorClassDex
  | ArmorClassNatural
  | ArmorClassArmor
  | ArmorClassSpell
  | ArmorClassCondition;
