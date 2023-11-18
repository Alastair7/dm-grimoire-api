import express, { Router } from "express";

const classRouter: Router = express.Router();

import { getClasses } from "../controllers/classController";

classRouter.get("/", getClasses);

export default classRouter;
