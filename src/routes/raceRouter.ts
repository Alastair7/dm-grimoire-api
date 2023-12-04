import express, { Router } from "express";
import { IRaceService } from "../services/Race/iRaceService";
import { RaceService } from "../services/Race/RaceService";
import { RaceController } from "../controllers/raceController";

const raceRouter: Router = express.Router();

const raceService: IRaceService = new RaceService();
const raceController: RaceController = new RaceController(raceService);

raceRouter.get("/", raceController.getRaces);
raceRouter.get("/:index", raceController.getRace);

export default raceRouter;
