import { BaseModel } from "../common/baseModel";
import { Spell } from "../spells/spellModel";

export interface ArmorClass {
  type: "dex" | "natural" | "armor" | "spell" | "condition";
  value: number;
  desc: string;
  armor?: Armor[];
  spell?: Spell;
  condition?: Condition;
}

interface Armor extends BaseModel {}
interface Condition extends BaseModel {}
