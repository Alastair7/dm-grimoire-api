import "reflect-metadata";

import { Request, Response } from "express";
import { IDamageTypeService } from "../services/Damage_Type/iDamageTypeService";
import {
  controller,
  httpGet,
  interfaces,
  request,
  response,
} from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from "../utils/DI/types";

@controller("/damage-types")
export class DamageTypeController implements interfaces.Controller {
  private damageTypeService: IDamageTypeService;

  constructor(
    @inject(TYPES.iDamageTypeService) damageTypeService: IDamageTypeService
  ) {
    this.damageTypeService = damageTypeService;
  }

  @httpGet("/")
  public async getAllDamageTypes(
    @request() req: Request,
    @response() res: Response
  ) {
    try {
      const response = await this.damageTypeService.getAllDamageTypes();

      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpGet("/:index")
  public async getDamageType(req: Request, res: Response) {
    try {
      const { index } = req.params;
      const response = await this.damageTypeService.getDamageType(index);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
