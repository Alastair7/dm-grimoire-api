import { Request, Response, response } from "express";
import { IEquipmentService } from "../services/Equipment/iEquipmentService";

export class EquipmentController {
  private equipmentService: IEquipmentService;

  constructor(equipmentService: IEquipmentService) {
    this.equipmentService = equipmentService;
  }

  getAllEquipment = async (req: Request, res: Response) => {
    try {
      const response = await this.equipmentService.getAllEquipment();

      res.status(200).json(response);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  getEquipment = async (req: Request, res: Response) => {
    try {
      const { index } = req.params;
      const response = await this.equipmentService.getEquipment(index);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).send(error);
    }
  };
}
