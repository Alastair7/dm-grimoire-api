import "reflect-metadata";

import { Request, Response } from "express";
import { ITraitService } from "../services/Trait/ITraitService";
import {
  controller,
  httpGet,
  interfaces,
  request,
  response,
} from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from "../utils/DI/types";

@controller("/traits")
export class TraitController implements interfaces.Controller {
  private _traitService: ITraitService;

  constructor(@inject(TYPES.iTraitService) traitService: ITraitService) {
    this._traitService = traitService;
  }

  @httpGet("/")
  public async getTraits(@request() req: Request, @response() res: Response) {
    try {
      const response = await this._traitService.getTraits();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpGet("/:index")
  public async getTrait(@request() req: Request, @response() res: Response) {
    try {
      const { index } = req.params;
      const response = await this._traitService.getTrait(index);

      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
