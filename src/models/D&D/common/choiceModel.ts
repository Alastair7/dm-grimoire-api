import { OptionSet } from "./optionSetModel";

export interface Choice {
  desc: string;
  choose: number;
  type: string;
  from: OptionSet;
}
