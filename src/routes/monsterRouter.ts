/*import express, { Router } from "express";
import { IMonsterService } from "../services/Monster/iMonsterService";
import { MonsterService } from "../services/Monster/monsterService";
import { MonsterController } from "../controllers/monsterController";

const monsterRouter: Router = express.Router();

const monsterService: IMonsterService = new MonsterService();
const monsterController: MonsterController = new MonsterController(
  monsterService
);

monsterRouter.get("/", monsterController.getMonsters);
monsterRouter.get("/:index", monsterController.getMonster);

export default monsterRouter;
*/
