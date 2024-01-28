/*import express, { Router } from "express";
import { DamageTypeController } from "../controllers/damageTypeController";
import { DamageTypeService } from "../services/Damage_Type/damageTypeService";
import { IDamageTypeService } from "../services/Damage_Type/iDamageTypeService";

const damageTypeRouter: Router = express.Router();

const damageTypeService: IDamageTypeService = new DamageTypeService();
const damageTypeController = new DamageTypeController(damageTypeService);

damageTypeRouter.get("/", damageTypeController.getAllDamageTypes);
damageTypeRouter.get("/:name", damageTypeController.getDamageType);

export default damageTypeRouter;
*/
