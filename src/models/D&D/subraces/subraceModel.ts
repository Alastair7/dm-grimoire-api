import { AbilityScore } from "../ability_scores/abilityScoreModel";
import { Choice } from "../common/choiceModel";
import { Language } from "../common/languageModel";

export interface Subrace {
  index: string;
  name: string;
  url: string;
  race: ParentRace;
  ability_bonuses: AbilityBonuses[];
  starting_proficiencies: Proficiency;
  languages: Language[];
  language_options: Choice;
  racial_traits: RacialTraits[];
}

interface ParentRace {
  index: string;
  name: string;
  url: string;
}

interface AbilityBonuses {
  bonus: number;
  ability_score: AbilityScore;
}

interface RacialTraits {
  index: string;
  name: string;
  url: string;
}
