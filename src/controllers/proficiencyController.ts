import { Request, Response } from "express";
import { IProficiencyService } from "../services/Proefinciency/iProficiencyService";

export class ProficiencyController {
  private proficiencyService: IProficiencyService;

  constructor(proficiencyService: IProficiencyService) {
    this.proficiencyService = proficiencyService;
  }

  getAllProficiencies = async (req: Request, res: Response) => {
    try {
      const response = await this.proficiencyService.getAllProficiencies();

      res.status(200).json(response);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  getProficiency = async (req: Request, res: Response) => {
    try {
      const { index } = req.params;
      const response = await this.proficiencyService.getProficiency(index);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).send(error);
    }
  };
}