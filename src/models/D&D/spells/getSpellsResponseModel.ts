import { Spell } from "./spellModel";

export interface GetSpellsResponseModel {
  count: number;
  results: Spell[];
}
