import express, { Router } from "express";
import { SpellService } from "../services/Spell/spellService";
import SpellController from "../controllers/spellController";

const spellRouter: Router = express.Router();

const spellService = new SpellService();
const spellController = new SpellController(spellService);

spellRouter.get("/", spellController.getSpells);
spellRouter.get("/:index", spellController.getSpell);

export default spellRouter;
