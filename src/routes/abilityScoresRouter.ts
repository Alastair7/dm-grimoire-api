import express, { Router } from "express";
import { AbilityScoreController } from "../controllers/abilityScoreController";
import { AbilityScoreService } from "../services/Ability_Score/abilityScoreService";
import { iAbilityScoreService } from "../services/Ability_Score/iAbilityScoreService";

const abilityScoresRouter: Router = express.Router();

const abilityScoreService: iAbilityScoreService = new AbilityScoreService();
const abilityScoreController: AbilityScoreController = new AbilityScoreController(
  abilityScoreService
);

abilityScoresRouter.get("/", abilityScoreController.getAllAbilityScores);
abilityScoresRouter.get("/:index", abilityScoreController.getAbilityScore);

export default abilityScoresRouter;