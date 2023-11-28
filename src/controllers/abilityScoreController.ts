import { Request, Response } from "express";
import { iAbilityScoreService } from "../services/Ability_Score/iAbilityScoreService";

export class AbilityScoreController{
  private abilityScoreService: iAbilityScoreService;

  constructor (abilityScoreService: iAbilityScoreService){
    this.abilityScoreService = abilityScoreService;
  }

  getAllAbilityScores = async (req: Request, res: Response) => {
    try{
      const response = await this.abilityScoreService.getAllAbilityScores();
      res.status(200).send(response);
    }catch(error){
      res.status(400).json(error);
    }
  }
  getAbilityScore = async (req: Request, res: Response) => {
    try{
      const { index } = req.params;
      const response = await this.abilityScoreService.getAbilityScore(index);
      res.status(200).json(response);
    }catch(error){
      res.status(400).json(error);
    }
  }
}