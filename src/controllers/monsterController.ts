import "reflect-metadata";

import { Request, Response } from "express";
import { IMonsterService } from "../services/Monster/iMonsterService";
import {
  controller,
  httpGet,
  interfaces,
  request,
  response,
} from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from "../utils/DI/types";

@controller("/monsters")
export class MonsterController implements interfaces.Controller {
  private _monsterService: IMonsterService;

  constructor(@inject(TYPES.iMonsterService) monsterService: IMonsterService) {
    this._monsterService = monsterService;
  }

  @httpGet("/")
  public async getMonsters(@request() req: Request, @response() res: Response) {
    try {
      const response = await this._monsterService.getMonsters();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpGet("/:index")
  public async getMonster(@request() req: Request, @response() res: Response) {
    try {
      const { index } = req.params;

      const response = await this._monsterService.getMonster(index);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
