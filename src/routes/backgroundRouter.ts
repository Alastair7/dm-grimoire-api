/*import express, { Router } from "express";
import { BackgroundService } from "../services/Background/backgroundService";
import { iBackgroundService } from "../services/Background/iBackgroundService";
import { BackgroundController } from "../controllers/backgroundController";

const backgroundRouter: Router = express.Router();

const backgroundService: iBackgroundService = new BackgroundService();
const backgroundController: BackgroundController = new BackgroundController(
  backgroundService
);

backgroundRouter.get("/", backgroundController.getAllBackgrounds);
backgroundRouter.get("/:index", backgroundController.getBackground);

export default backgroundRouter;
*/
