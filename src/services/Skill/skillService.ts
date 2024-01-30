import { inject, injectable } from "inversify";
import { GetSkillResponse } from "../../models/D&D/skills/getSkillResponseModel";
import { GetSkillsResponse } from "../../models/D&D/skills/getSkillsResponseModel";
import { IDndService } from "../../third-party/d&d/IDndService";
import { ISkillService } from "./iSkillService";
import TYPES from "../../utils/DI/types";
import { ApiRequestTypes } from "../../common/enums/apiRequestTypes";

@injectable()
export class SkillService implements ISkillService {
  private _dndService: IDndService;

  constructor(@inject(TYPES.IDndService) dndService: IDndService) {
    this._dndService = dndService;
  }
  async getSkills(): Promise<GetSkillsResponse> {
    const response: GetSkillsResponse = await this._dndService.getAll(
      ApiRequestTypes.SKILL
    );

    return response;
  }
  async getSkill(index: string): Promise<GetSkillResponse> {
    const response: GetSkillResponse = await this._dndService.get(
      index,
      ApiRequestTypes.SKILL
    );

    return response;
  }
}
