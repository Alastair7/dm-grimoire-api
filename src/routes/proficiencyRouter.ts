import express, { Router } from "express";
import { ProficiencyController } from "../controllers/proficiencyController";
import { ProficiencyService } from "../services/Proefinciency/proficiencyService";
import { IProficiencyService } from "../services/Proefinciency/iProficiencyService";

const proficiencyRouter: Router = express.Router();

const proficiencyService: IProficiencyService = new ProficiencyService();
const proficiencyController = new ProficiencyController(proficiencyService);

proficiencyRouter.get("/", proficiencyController.getAllProficiencies);
proficiencyRouter.get("/:index", proficiencyController.getProficiency);

export default proficiencyRouter;