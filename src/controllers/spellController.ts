import { Request, Response } from "express";
import { SpellService } from "../services/spellService";

const spellService = new SpellService();

class SpellController {
  getSpells = async (req: Request, res: Response) => {
    try {
      const response = await spellService.getSpells();
      res.json(response);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };
}

export default new SpellController();
