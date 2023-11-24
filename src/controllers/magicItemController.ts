import { Request, Response } from "express";
import { IMagicItemService } from "../services/Magic_Item/iMagicItemService";

export class MagicItemController {
  private magicItemService: IMagicItemService;

  constructor(magicItemService: IMagicItemService) {
    this.magicItemService = magicItemService;
  }

  getMagicItems = async (req: Request, res: Response) => {
    try {
      const response = await this.magicItemService.getMagicItems();
      res.status(200).send(response);
    } catch (error) {
      res.status(400).json(error);
    }
  };

  getMagicItem = async (req: Request, res: Response) => {
    try {
      const { index } = req.params;
      const response = await this.magicItemService.getMagicItem(index);

      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  };
}
