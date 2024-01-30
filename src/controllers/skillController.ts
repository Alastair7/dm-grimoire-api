import "reflect-metadata";

import { Request, Response } from "express";
import { ISkillService } from "../services/Skill/iSkillService";
import {
  controller,
  httpGet,
  interfaces,
  request,
  response,
} from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from "../utils/DI/types";

@controller("/skills")
export class SkillController implements interfaces.Controller {
  private _skillService: ISkillService;

  constructor(@inject(TYPES.iSkillService) skillService: ISkillService) {
    this._skillService = skillService;
  }

  @httpGet("/")
  public async getSkills(@request() req: Request, @response() res: Response) {
    try {
      const response = await this._skillService.getSkills();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpGet("/:index")
  public async getSkill(@request() req: Request, @response() res: Response) {
    try {
      const { index } = req.params;
      const response = await this._skillService.getSkill(index);

      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
