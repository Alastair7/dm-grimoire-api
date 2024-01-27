import "reflect-metadata";

import { Request, Response } from "express";
import { IConditionService } from "../services/Condition/iConditionService";
import {
  controller,
  httpGet,
  interfaces,
  request,
  response,
} from "inversify-express-utils";
import TYPES from "../utils/DI/types";
import { inject } from "inversify";

@controller("/conditions")
export class ConditionController implements interfaces.Controller {
  private _conditionService: IConditionService;

  constructor(
    @inject(TYPES.iConditionService) conditionService: IConditionService
  ) {
    this._conditionService = conditionService;
  }

  @httpGet("/")
  public async getConditions(
    @request() req: Request,
    @response() res: Response
  ) {
    try {
      const response = await this._conditionService.getConditions();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpGet("/:index")
  public async getCondition(
    @request() req: Request,
    @response() res: Response
  ) {
    try {
      const { index } = req.params;
      const response = await this._conditionService.getCondition(index);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
