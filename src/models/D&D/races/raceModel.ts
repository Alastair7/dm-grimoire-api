import { AbilityScore } from "../ability_scores/abilityScoreModel";
import { BaseModel } from "../common/baseModel";
import { Choice } from "../common/choiceModel";
import { Language } from "../common/languageModel";

export interface Race extends BaseModel {
  speed: number;
  ability_bonuses: AbilityBonus[];
  alignment: string;
  age: string;
  size: string;
  size_description: string;
  starting_proficiencies: Proficiency[];
  starting_proficiency_options: Choice;
  languages: Language[];
  language_desc: string;
  traits: Traits[];
  subraces: SubRaces[];
}

interface AbilityBonus {
  bonus: number;
  ability_score: AbilityScore;
}

interface SubRaces extends BaseModel {}

interface Traits extends BaseModel {}
