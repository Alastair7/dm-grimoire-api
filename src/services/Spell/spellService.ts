import { GetSpellsResponseModel } from "../../models/D&D/spells/getSpellsResponseModel";
import { GetSpellResponseModel } from "../../models/D&D/spells/getSpellResponseModel";
import { ISpellService } from "./iSpellService";
import { IDndService } from "../../third-party/d&d/IDndService";
import { inject, injectable } from "inversify";
import TYPES from "../../utils/DI/types";
import { ApiRequestTypes } from "../../common/enums/apiRequestTypes";

@injectable()
export class SpellService implements ISpellService {
  private _dndService: IDndService;

  constructor(@inject(TYPES.IDndService) dndService: IDndService) {
    this._dndService = dndService;
  }

  async getSpells(): Promise<GetSpellsResponseModel> {
    const response: GetSpellsResponseModel = await this._dndService.getAll(
      ApiRequestTypes.SPELL
    );

    return response;
  }

  async getSpell(index: string): Promise<GetSpellResponseModel> {
    const response: GetSpellResponseModel = await this._dndService.get(
      index,
      ApiRequestTypes.SPELL
    );

    return response;
  }
}
