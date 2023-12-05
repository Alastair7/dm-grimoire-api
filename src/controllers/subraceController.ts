import { Request, Response } from "express";
import { ISubraceService } from "../services/SubRace/iSubraceService";

export class SubraceController {
  private subraceService: ISubraceService;
  constructor(subraceService: ISubraceService) {
    this.subraceService = subraceService;
  }

  getSubraces = async (req: Request, res: Response) => {
    try {
      const response = await this.subraceService.getSubraces();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  };

  getSubrace = async (req: Request, res: Response) => {
    try {
      const { index } = req.params;
      const response = await this.subraceService.getSubrace(index);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  };
}
