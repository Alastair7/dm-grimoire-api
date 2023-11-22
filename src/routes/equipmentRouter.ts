import express, { Router } from "express";
import { EquipmentController } from "../controllers/equipmentController";
import { IEquipmentService } from "../services/Equipment/iEquipmentService";
import { EquipmentService } from "../services/Equipment/equipmentService";

const equipmentRouter = express.Router();

const equipmentService: IEquipmentService = new EquipmentService();
const equipmentController = new EquipmentController(equipmentService);

equipmentRouter.get("/", equipmentController.getAllEquipment);
equipmentRouter.get("/:index", equipmentController.getEquipment);

export default equipmentRouter;
