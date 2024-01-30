import "reflect-metadata";

import { Request, Response } from "express";
import { IRaceService } from "../services/Race/iRaceService";
import {
  controller,
  httpGet,
  interfaces,
  request,
  response,
} from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from "../utils/DI/types";

@controller("/races")
export class RaceController implements interfaces.Controller {
  private raceService: IRaceService;

  constructor(@inject(TYPES.iRaceService) raceService: IRaceService) {
    this.raceService = raceService;
  }

  @httpGet("/")
  public async getRaces(@request() req: Request, @response() res: Response) {
    try {
      const response = await this.raceService.getRaces();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpGet("/:index")
  public async getRace(@request() req: Request, @response() res: Response) {
    try {
      const { index } = req.params;
      const response = await this.raceService.getRace(index);

      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
