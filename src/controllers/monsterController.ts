import { Request, Response } from "express";
import { IMonsterService } from "../services/Monster/iMonsterService";

export class MonsterController {
  private monsterService: IMonsterService;

  constructor(monsterService: IMonsterService) {
    this.monsterService = monsterService;
  }

  getMonsters = async (req: Request, res: Response) => {
    try {
      const response = await this.monsterService.getMonsters();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  };

  getMonster = async (req: Request, res: Response) => {
    try {
      const { index } = req.params;

      const response = await this.monsterService.getMonster(index);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  };
}
