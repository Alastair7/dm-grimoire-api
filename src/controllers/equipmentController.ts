import "reflect-metadata";

import { Request, Response } from "express";
import { IEquipmentService } from "../services/Equipment/iEquipmentService";
import {
  controller,
  httpGet,
  interfaces,
  request,
  response,
} from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from "../utils/DI/types";

@controller("/equipments")
export class EquipmentController implements interfaces.Controller {
  private equipmentService: IEquipmentService;

  constructor(
    @inject(TYPES.IEquipmentService) equipmentService: IEquipmentService
  ) {
    this.equipmentService = equipmentService;
  }

  @httpGet("/")
  public async getAllEquipment(
    @request() req: Request,
    @response() res: Response
  ) {
    try {
      const response = await this.equipmentService.getAllEquipment();

      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpGet("/:index")
  public async getEquipment(
    @request() req: Request,
    @response() res: Response
  ) {
    try {
      const { index } = req.params;
      const response = await this.equipmentService.getEquipment(index);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
