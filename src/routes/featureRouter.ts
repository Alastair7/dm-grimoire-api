import express, { Router } from "express";
import { FeatureService } from "../services/Feature/featureService";
import { IFeatureService } from "../services/Feature/iFeatureService";
import { FeatureController } from "../controllers/featureController";

const featureRouter: Router = express.Router();

const featureService: IFeatureService = new FeatureService();
const featureController: FeatureController = new FeatureController(featureService);

featureRouter.get("/", featureController.getFeatures);
featureRouter.get("/:index", featureController.getFeature);

export default featureRouter;