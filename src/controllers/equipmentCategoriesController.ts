import { Request, Response } from "express";
import { IEquipmentCategoriesService } from "../services/Equipment-Categories/IEquipmentCategoriesService";

export class EquipmentCategoriesController {
  private equipmentCategoriesService: IEquipmentCategoriesService;

  constructor(equipmentCategoriesService: IEquipmentCategoriesService) {
    this.equipmentCategoriesService = equipmentCategoriesService;
  }

  getEquipmentCategories = async (req: Request, res: Response) => {
    try {
      const response =
        await this.equipmentCategoriesService.getEquipmentCategories();

      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  };

  getEquipmentCategory = async (req: Request, res: Response) => {
    try {
      const response =
        await this.equipmentCategoriesService.getEquipmentCategories();

      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  };
}
