import express, { Router } from "express";
import SpellController from "../controllers/spellController";
import { ISpellService } from "../services/Spell/iSpellService";
import { SpellService } from "../services/Spell/spellService";

const spellRouter: Router = express.Router();

const spellService: ISpellService = new SpellService();
const spellController = new SpellController(spellService);

spellRouter.get("/", spellController.getSpells);
spellRouter.get("/:index", spellController.getSpell);

export default spellRouter;
