import "reflect-metadata";

import { Request, Response } from "express";
import { IMagicItemService } from "../services/Magic_Item/iMagicItemService";
import {
  controller,
  httpGet,
  interfaces,
  request,
  response,
} from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from "../utils/DI/types";

@controller("/magic-items")
export class MagicItemController implements interfaces.Controller {
  private _magicItemService: IMagicItemService;

  constructor(
    @inject(TYPES.iMagicItemService) magicItemService: IMagicItemService
  ) {
    this._magicItemService = magicItemService;
  }

  @httpGet("/")
  public async getMagicItems(
    @request() req: Request,
    @response() res: Response
  ) {
    try {
      const response = await this._magicItemService.getMagicItems();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpGet("/:index")
  public async getMagicItem(
    @request() req: Request,
    @response() res: Response
  ) {
    try {
      const { index } = req.params;
      const response = await this._magicItemService.getMagicItem(index);

      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
