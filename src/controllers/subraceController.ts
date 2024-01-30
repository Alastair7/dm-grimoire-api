import "reflect-metadata";

import { Request, Response } from "express";
import { ISubraceService } from "../services/SubRace/iSubraceService";
import {
  controller,
  httpGet,
  interfaces,
  request,
  response,
} from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from "../utils/DI/types";

@controller("/subraces")
export class SubraceController implements interfaces.Controller {
  private _subraceService: ISubraceService;

  constructor(@inject(TYPES.iSubraceService) subraceService: ISubraceService) {
    this._subraceService = subraceService;
  }

  @httpGet("/")
  public async getSubraces(@request() req: Request, @response() res: Response) {
    try {
      const response = await this._subraceService.getSubraces();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpGet("/:index")
  public async getSubrace(@request() req: Request, @response() res: Response) {
    try {
      const { index } = req.params;
      const response = await this._subraceService.getSubrace(index);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
