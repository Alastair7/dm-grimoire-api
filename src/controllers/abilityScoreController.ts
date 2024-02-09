import "reflect-metadata";

import { Request, Response } from "express";
import { iAbilityScoreService } from "../services/Ability_Score/iAbilityScoreService";
import { inject } from "inversify";
import TYPES from "../utils/DI/types";
import {
  controller,
  httpGet,
  interfaces,
  request,
  response,
} from "inversify-express-utils";

@controller("/ability-scores")
export class AbilityScoreController implements interfaces.Controller {
  private _abilityScoreService: iAbilityScoreService;

  constructor(
    @inject(TYPES.iAbilityScoreService)
    abilityScoreService: iAbilityScoreService
  ) {
    this._abilityScoreService = abilityScoreService;
  }

  @httpGet("/")
  public async getAllAbilityScores(
    @request() req: Request,
    @response() res: Response
  ) {
    try {
      const response = await this._abilityScoreService.getAllAbilityScores();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpGet("/:index")
  public async getAbilityScore(
    @request() req: Request,
    @response() res: Response
  ) {
    try {
      const { index } = req.params;
      const response = await this._abilityScoreService.getAbilityScore(index);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
