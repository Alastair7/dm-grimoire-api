import { Request, Response, response } from "express";
import { IConditionService } from "../services/Condition/iConditionService";

export class ConditionController {
  private conditionService: IConditionService;

  constructor(conditionService: IConditionService) {
    this.conditionService = conditionService;
  }

  getConditions = async (req: Request, res: Response) => {
    try {
      const response = await this.conditionService.getConditions();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  };

  getCondition = async (req: Request, res: Response) => {
    try {
      const { index } = req.params;
      const response = await this.conditionService.getCondition(index);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  };
}
