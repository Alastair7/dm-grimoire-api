import express, { Router } from "express";
import spellController from "../controllers/spellController";

const spellRouter: Router = express.Router();

spellRouter.get("/", spellController.getSpells);

export default spellRouter;
