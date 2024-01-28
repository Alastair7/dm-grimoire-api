import "reflect-metadata";

import { Request, Response } from "express";
import {
  controller,
  httpGet,
  interfaces,
  request,
  response,
} from "inversify-express-utils";
import TYPES from "../utils/DI/types";
import { inject } from "inversify";
import { IEquipmentCategoriesService } from "../services/Equipment-Categories/iEquipmentCategoriesService";

@controller("/equipment-categories")
export class EquipmentCategoriesController implements interfaces.Controller {
  private equipmentCategoriesService: IEquipmentCategoriesService;

  constructor(
    @inject(TYPES.iEquipmentCategories)
    equipmentCategoriesService: IEquipmentCategoriesService
  ) {
    this.equipmentCategoriesService = equipmentCategoriesService;
  }

  @httpGet("/")
  public async getEquipmentCategories(
    @request() req: Request,
    @response() res: Response
  ) {
    try {
      const response =
        await this.equipmentCategoriesService.getEquipmentCategories();

      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpGet("/:index")
  public async getEquipmentCategory(
    @request() req: Request,
    @response() res: Response
  ) {
    try {
      const { index } = req.params;
      const response =
        await this.equipmentCategoriesService.getEquipmentCategory(index);

      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
