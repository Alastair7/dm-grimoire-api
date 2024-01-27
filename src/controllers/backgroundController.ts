import "reflect-metadata";

import { Request, Response } from "express";
import { iBackgroundService } from "../services/Background/iBackgroundService";
import {
  controller,
  httpGet,
  interfaces,
  request,
  response,
} from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from "../utils/DI/types";

@controller("/backgrounds")
export class BackgroundController implements interfaces.Controller {
  private _backgroundService: iBackgroundService;

  constructor(
    @inject(TYPES.iBackgroundService) backgroundService: iBackgroundService
  ) {
    this._backgroundService = backgroundService;
  }

  @httpGet("/")
  public async getAllBackgrounds(
    @request() req: Request,
    @response() res: Response
  ) {
    try {
      const response = await this._backgroundService.getAllBackgrounds();
      res.status(200).send(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpGet("/:index")
  public async getBackground(
    @request() req: Request,
    @response() res: Response
  ) {
    try {
      const { index } = req.params;
      const response = await this._backgroundService.getBackground(index);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
