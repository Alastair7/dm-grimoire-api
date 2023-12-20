import { AbilityScore } from "../ability_scores/abilityScoreModel";
import { BaseModel } from "../common/baseModel";
import { Choice } from "../common/choiceModel";
import { Language } from "../common/languageModel";

export interface Subrace extends BaseModel {
  race: ParentRace;
  ability_bonuses: AbilityBonuses[];
  starting_proficiencies: Proficiency;
  languages: Language[];
  language_options: Choice;
  racial_traits: RacialTraits[];
}

interface ParentRace extends BaseModel {}

interface AbilityBonuses {
  bonus: number;
  ability_score: AbilityScore;
}

interface RacialTraits extends BaseModel {}
