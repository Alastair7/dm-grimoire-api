/*import express, { Router } from "express";
import { IMagicItemService } from "../services/Magic_Item/iMagicItemService";
import { MagicItemService } from "../services/Magic_Item/magicItemService";
import { MagicItemController } from "../controllers/magicItemController";

const magicItemRouter: Router = express.Router();

const magicItemService: IMagicItemService = new MagicItemService();
const magicItemController: MagicItemController = new MagicItemController(
  magicItemService
);

magicItemRouter.get("/", magicItemController.getMagicItems);
magicItemRouter.get("/:index", magicItemController.getMagicItem);

export default magicItemRouter;
*/
