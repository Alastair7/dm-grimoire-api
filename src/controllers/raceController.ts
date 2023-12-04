import { Request, Response } from "express";
import { IRaceService } from "../services/Race/iRaceService";

export class RaceController {
  private raceService: IRaceService;

  constructor(raceService: IRaceService) {
    this.raceService = raceService;
  }

  getRaces = async (req: Request, res: Response) => {
    try {
      const response = await this.raceService.getRaces();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  };

  getRace = async (req: Request, res: Response) => {
    try {
      const { index } = req.params;
      const response = await this.raceService.getRace(index);

      res.status(200).send(response);
    } catch (error) {
      res.status(400).send(error);
    }
  };
}
