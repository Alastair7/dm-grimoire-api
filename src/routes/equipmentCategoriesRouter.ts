import express, { Router } from "express";
import { IEquipmentCategoriesService } from "../services/Equipment-Categories/IEquipmentCategoriesService";
import { EquipmentCategoriesService } from "../services/Equipment-Categories/equipmentCategoriesService";
import { EquipmentCategoriesController } from "../controllers/equipmentCategoriesController";

const equipmentCategoriesRouter: Router = express.Router();

const equipmentCategoriesService: IEquipmentCategoriesService =
  new EquipmentCategoriesService();

const equipmentCategoriesController: EquipmentCategoriesController =
  new EquipmentCategoriesController(equipmentCategoriesService);

equipmentCategoriesRouter.get(
  "/",
  equipmentCategoriesController.getEquipmentCategories
);

equipmentCategoriesRouter.get(
  "/:index",
  equipmentCategoriesController.getEquipmentCategory
);

export default equipmentCategoriesRouter;
