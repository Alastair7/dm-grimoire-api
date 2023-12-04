import { Spell } from "../spells/spellModel";

export interface ArmorClass {
  type: "dex" | "natural" | "armor" | "spell" | "condition";
  value: number;
  desc: string;
  armor?: Armor[];
  spell?: Spell;
  condition?: Condition;
}

interface Armor {
  index: string;
  name: string;
  url: string;
}
interface Condition {
  index: string;
  name: string;
  url: string;
}
