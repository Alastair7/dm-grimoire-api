import { GetSpellResponseModel } from "../../models/D&D/spells/getSpellResponseModel";
import { GetSpellsResponseModel } from "../../models/D&D/spells/getSpellsResponseModel";

export interface ISpellService {
  getSpells(): Promise<GetSpellsResponseModel>;
  getSpell(index: string): Promise<GetSpellResponseModel>;
}
