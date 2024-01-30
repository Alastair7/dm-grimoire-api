import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetMonsterResponse } from "../../models/D&D/monsters/getMonsterResponseModel";
import { GetMonstersResponse } from "../../models/D&D/monsters/getMonstersResponseModel";
import { IMonsterService } from "./iMonsterService";
import { inject, injectable } from "inversify";
import { IDndService } from "../../third-party/d&d/IDndService";
import TYPES from "../../utils/DI/types";
import { ApiRequestTypes } from "../../common/enums/apiRequestTypes";

@injectable()
export class MonsterService implements IMonsterService {
  public _dndService: IDndService;

  constructor(@inject(TYPES.IDndService) dndService: IDndService) {
    this._dndService = dndService;
  }

  async getMonsters(): Promise<GetMonstersResponse> {
    const response: GetMonstersResponse = await this._dndService.getAll(
      ApiRequestTypes.MONSTER
    );
    return response;
  }
  async getMonster(index: string): Promise<GetMonsterResponse> {
    const response: GetMonsterResponse = await this._dndService.get(
      index,
      ApiRequestTypes.MONSTER
    );

    return response;
  }
}
