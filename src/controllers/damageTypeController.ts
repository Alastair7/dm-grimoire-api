import { Request, Response } from "express";
import { IDamageTypeService } from "../services/Damage_Type/iDamageTypeService";

export class DamageTypeController {
  private damageTypeService: IDamageTypeService;

  constructor(equipmentService: IDamageTypeService) {
    this.damageTypeService = equipmentService;
  }

  getAllDamageTypes = async (req: Request, res: Response) => {
    try {
      const response = await this.damageTypeService.getAllDamageTypes();

      res.status(200).json(response);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  getDamageType = async (req: Request, res: Response) => {
    try {
      const { index } = req.params;
      const response = await this.damageTypeService.getDamageType(index);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).send(error);
    }
  };
}