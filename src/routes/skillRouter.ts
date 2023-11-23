import express, { Router } from "express";
import { ISkillService } from "../services/Skill/iSkillService";
import { SkillService } from "../services/Skill/skillService";
import { SkillController } from "../controllers/skillController";

const skillRouter: Router = express.Router();

const skillService: ISkillService = new SkillService();
const skillController: SkillController = new SkillController(skillService);

skillRouter.get("/", skillController.getSkills);
skillRouter.get("/:index", skillController.getSkill);

export default skillRouter;
