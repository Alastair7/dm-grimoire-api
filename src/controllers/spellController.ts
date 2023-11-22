import { Request, Response } from "express";
import { SpellService } from "../services/spellService";

class SpellController {
  private spellService: SpellService;

  constructor(spellService: SpellService) {
    this.spellService = spellService;
  }

  getSpells = async (req: Request, res: Response) => {
    try {
      const response = await this.spellService.getSpells();
      res.json(response);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  getSpell = async (req: Request, res: Response) => {
    try {
      const { index } = req.params;
      console.log(index);
      const response = await this.spellService.getSpell(index);

      res.json(response);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };
}

export default SpellController;
