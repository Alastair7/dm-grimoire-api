import "reflect-metadata";

import { Request, Response } from "express";
import { ISpellService } from "../services/Spell/iSpellService";
import {
  controller,
  httpGet,
  interfaces,
  request,
  response,
} from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from "../utils/DI/types";

@controller("/spells")
export class SpellController implements interfaces.Controller {
  private spellService: ISpellService;

  constructor(@inject(TYPES.iSpellService) spellService: ISpellService) {
    this.spellService = spellService;
  }

  @httpGet("/")
  public async getSpells(@request() req: Request, @response() res: Response) {
    try {
      const response = await this.spellService.getSpells();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }

  @httpGet("/:index")
  public async getSpell(@request() req: Request, @response() res: Response) {
    try {
      const { index } = req.params;
      console.log(index);
      const response = await this.spellService.getSpell(index);

      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
}

export default SpellController;
