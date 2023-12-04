import { GetMonsterResponse } from "../../models/D&D/monsters/getMonsterResponseModel";
import { GetMonstersResponse } from "../../models/D&D/monsters/getMonstersResponseModel";

export interface IMonsterService {
  getMonsters(): Promise<GetMonstersResponse>;
  getMonster(index: string): Promise<GetMonsterResponse>;
}
