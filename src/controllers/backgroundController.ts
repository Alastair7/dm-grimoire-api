import { Request, Response } from "express";
import { iBackgroundService } from "../services/Background/iBackgroundService";

export class BackgroundController{
  private backgroundService: iBackgroundService;

  constructor (backgroundService: iBackgroundService){
    this.backgroundService = backgroundService;
  }

  getAllBackgrounds = async (req: Request, res: Response) => {
    try{
      const response = await this.backgroundService.getAllBackgrounds();
      res.status(200).send(response);
    }catch(error){
      res.status(400).json(error);
    }
  }
  getBackground = async (req: Request, res: Response) => {
    try{
      const { index } = req.params;
      const response = await this.backgroundService.getBackground(index);
      res.status(200).json(response);
    }catch(error){
      res.status(400).json(error);
    }
  }
}