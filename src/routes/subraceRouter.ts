import express, { Router } from "express";
import { ISubraceService } from "../services/SubRace/iSubraceService";
import { SubraceService } from "../services/SubRace/subraceService";
import { SubraceController } from "../controllers/subraceController";

const subraceRouter: Router = express.Router();

const subraceService: ISubraceService = new SubraceService();
const subraceController: SubraceController = new SubraceController(
  subraceService
);

subraceRouter.get("/", subraceController.getSubraces);
subraceRouter.get("/:index", subraceController.getSubrace);

export default subraceRouter;
