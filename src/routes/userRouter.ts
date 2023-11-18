import express, { Router } from "express";

const userRouter: Router = express.Router();

import { getUsers, getUser } from "../controllers/userController";

userRouter.get("/", getUsers);

userRouter.get("/:id", getUser);

export default userRouter;
