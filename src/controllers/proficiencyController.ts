import "reflect-metadata";

import { Request, Response } from "express";
import { IProficiencyService } from "../services/Profinciency/iProficiencyService";
import {
  controller,
  httpGet,
  interfaces,
  request,
  response,
} from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from "../utils/DI/types";

@controller("/proficiencies")
export class ProficiencyController implements interfaces.Controller {
  private proficiencyService: IProficiencyService;

  constructor(
    @inject(TYPES.iProficiencyService) proficiencyService: IProficiencyService
  ) {
    this.proficiencyService = proficiencyService;
  }

  @httpGet("/")
  public async getAllProficiencies(
    @request() req: Request,
    @response() res: Response
  ) {
    try {
      const response = await this.proficiencyService.getAllProficiencies();

      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpGet("/:index")
  public async getProficiency(
    @request() req: Request,
    @response() res: Response
  ) {
    try {
      const { index } = req.params;
      const response = await this.proficiencyService.getProficiency(index);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
