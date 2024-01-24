import "reflect-metadata";

import { Request, Response } from "express";
import { IAlignmentService } from "../services/Alignment/iAlignmentService";
import {
  controller,
  httpGet,
  interfaces,
  request,
  response,
} from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from "../utils/DI/types";

@controller("/alignments")
export class AlignmentController implements interfaces.Controller {
  private _alignmentService: IAlignmentService;

  constructor(
    @inject(TYPES.iAlignmentService) alignmentService: IAlignmentService
  ) {
    this._alignmentService = alignmentService;
  }

  @httpGet("/")
  public async getAllAlignments(
    @request() req: Request,
    @response() res: Response
  ) {
    try {
      const response = await this._alignmentService.getAllAlignments();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpGet("/:index")
  public async getAlignment(req: Request, res: Response) {
    try {
      const { index } = req.params;
      const response = await this._alignmentService.getAlignment(index);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
