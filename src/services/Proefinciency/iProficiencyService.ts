import { GetAllProficienciesResponse } from "../../models/D&D/proficiencies/getAllProficienciesResponseModel";
import { GetProficiencyResponse } from "../../models/D&D/proficiencies/getProficiencyResponseModel";

export interface IProficiencyService{
  getAllProficiencies(): Promise<GetAllProficienciesResponse>;
  getProficiency(name: string): Promise<GetProficiencyResponse>;
}