import "reflect-metadata";

import { IFeatureService } from "../services/Feature/iFeatureService";
import { Request, Response } from "express";
import {
  controller,
  httpGet,
  request,
  response,
} from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from "../utils/DI/types";

@controller("/features")
export class FeatureController {
  private featureService: IFeatureService;

  constructor(@inject(TYPES.iFeatureService) featureService: IFeatureService) {
    this.featureService = featureService;
  }

  @httpGet("/")
  public async getFeatures(@request() req: Request, @response() res: Response) {
    try {
      const response = await this.featureService.getFeatures();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpGet("/:index")
  public async getFeature(@request() req: Request, @response() res: Response) {
    try {
      const { index } = req.params;
      const response = await this.featureService.getFeature(index);

      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
