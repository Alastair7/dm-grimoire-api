import { IFeatureService } from "../services/Feature/iFeatureService";
import { Request, Response } from "express";

export class FeatureController{
  private featureService: IFeatureService;

  constructor (featureService: IFeatureService){
    this.featureService = featureService;
  }

  getFeatures = async (req: Request, res: Response) => {
    try {
      const response = await this.featureService.getFeatures();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  };

  getFeature = async (req: Request, res: Response) => {
    try {
      const { index } = req.params;
      const response = await this.featureService.getFeature(index);

      res.status(200).send(response);
    } catch (error) {
      res.status(400).send(error);
    }
  };
}