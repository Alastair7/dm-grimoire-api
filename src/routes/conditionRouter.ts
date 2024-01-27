/*import express, { Router } from "express";
import { IConditionService } from "../services/Condition/iConditionService";
import { ConditionService } from "../services/Condition/conditionService";
import { ConditionController } from "../controllers/conditionController";

const conditionRouter: Router = express.Router();

const conditionService: IConditionService = new ConditionService();
const conditionController: ConditionController = new ConditionController(
  conditionService
);

conditionRouter.get("/", conditionController.getConditions);
conditionRouter.get("/:index", conditionController.getCondition);

export default conditionRouter;
*/
