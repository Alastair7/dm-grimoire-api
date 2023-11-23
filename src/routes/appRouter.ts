import express, { Router, Request, Response } from "express";
import userRouter from "./userRouter"; // Import user router
import classRouter from "./classRouter";
import spellRouter from "./spellRouter";
import damageTypeRouter from "./damageTypeRouter";
import equipmentRouter from "./equipmentRouter";
import skillRouter from "./skillRouter";

/* Hey, I guess you are here to create a router and you don't know exactly how.
It's quite simple, this is the "main" router that you access via http://localhost:3000
*/
const appRouter: Router = express.Router();

// This is the default route so when you access for the first time you'll see that welcome message.
appRouter.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the API you accessed from app router");
});

// Here you can add more routes, for this case the result would be: http://localhost:3000/users
appRouter.use("/users", userRouter); // Add user router
appRouter.use("/classes", classRouter);
appRouter.use("/spells", spellRouter);
appRouter.use("/damage-types", damageTypeRouter);
appRouter.use("/equipment", equipmentRouter);
appRouter.use("/proficiencies", equipmentRouter);
appRouter.use("/skills", skillRouter);

export default appRouter;
