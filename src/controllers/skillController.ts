import { Request, Response } from "express";
import { ISkillService } from "../services/Skill/iSkillService";

export class SkillController {
  private skillService: ISkillService;

  constructor(skillService: ISkillService) {
    this.skillService = skillService;
  }

  getSkills = async (req: Request, res: Response) => {
    try {
      const response = await this.skillService.getSkills();
      res.status(200).send(response);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  getSkill = async (req: Request, res: Response) => {
    try {
      const { index } = req.params;
      const response = await this.skillService.getSkill(index);

      res.status(200).send(response);
    } catch (error) {
      res.status(400).send(error);
    }
  };
}
