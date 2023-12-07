import { Request, Response } from "express";
import { ITraitService } from "../services/Trait/ITraitService";

export class TraitController {
  private traitService: ITraitService;

  constructor(traitService: ITraitService) {
    this.traitService = traitService;
  }

  getTraits = async (req: Request, res: Response) => {
    try {
      const response = await this.traitService.getTraits();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  };

  getTrait = async (req: Request, res: Response) => {
    try {
      const { index } = req.params;
      const response = await this.traitService.getTrait(index);

      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  };
}
