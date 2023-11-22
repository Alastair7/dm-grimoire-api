import express, { Router } from "express";
import { getAllDamageTypes, getDamageType } from "../controllers/damageTypeController";


const damageTypeRouter: Router = express.Router();

damageTypeRouter.get("/", getAllDamageTypes);
damageTypeRouter.get("/:name", getDamageType);

export default damageTypeRouter;