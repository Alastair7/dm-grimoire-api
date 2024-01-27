import "reflect-metadata";

import { Request, Response } from "express";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import {
  controller,
  httpGet,
  interfaces,
  request,
  response,
} from "inversify-express-utils";
import { IClassService } from "../services/Class/iClassService";
import { inject } from "inversify";
import TYPES from "../utils/DI/types";

@controller("/classes")
export class ClassController implements interfaces.Controller {
  private _classService: IClassService;

  constructor(@inject(TYPES.iClassService) classService: IClassService) {
    this._classService = classService;
  }

  @httpGet("/")
  public async getClasses(@request() req: Request, @response() res: Response) {
    try {
      const response = await this._classService.getClasses();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpGet("/:index")
  public async getClass(@request() req: Request, @response() res: Response) {
    try {
      const { index } = req.params;

      const response = await this._classService.getClass(index);

      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
