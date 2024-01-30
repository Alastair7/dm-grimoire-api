import express, { Router, Request, Response } from "express";
//import userRouter from "./userRouter"; // Import user router
//import classRouter from "./classRouter";
//import spellRouter from "./spellRouter";
//import damageTypeRouter from "./damageTypeRouter";
//import equipmentRouter from "./equipmentRouter";
//import skillRouter from "./skillRouter";
//import magicItemRouter from "./magicItemRouter";
//import alignmentRouter from "./alignmentRouter";
//import monsterRouter from "./monsterRouter";
//import abilityScoresRouter from "./abilityScoresRouter";
//import featureRouter from "./featureRouter";
//import raceRouter from "./raceRouter";
//import backgroundRouter from "./backgroundRouter";
//import subraceRouter from "./subraceRouter";
//import conditionRouter from "./conditionRouter";
//import equipmentCategoriesRouter from "./equipmentCategoriesRouter";
//import traitRouter from "./traitRouter";

/* Hey, I guess you are here to create a router and you don't know exactly how.
It's quite simple, this is the "main" router that you access via http://localhost:3000
*/
const appRouter: Router = express.Router();

// This is the default route so when you access for the first time you'll see that welcome message.
appRouter.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the API you accessed from app router");
});

// Here you can add more routes, for this case the result would be: http://localhost:3000/users
//appRouter.use("/users", userRouter); // Add user router
//appRouter.use("/classes", classRouter);
//appRouter.use("/spells", spellRouter);
//appRouter.use("/damage-types", damageTypeRouter);
//appRouter.use("/equipment", equipmentRouter);
//appRouter.use("/proficiencies", equipmentRouter);
//appRouter.use("/skills", skillRouter);
//appRouter.use("/magic-items", magicItemRouter);
//appRouter.use("/alignments", alignmentRouter);
//appRouter.use("/monsters", monsterRouter);
//appRouter.use("/ability-scores", abilityScoresRouter);
//appRouter.use("/features", featureRouter);
//appRouter.use("/races", raceRouter);
//appRouter.use("/backgrounds", backgroundRouter);
//appRouter.use("/subraces", subraceRouter);
//appRouter.use("/conditions", conditionRouter);
//appRouter.use("/equipment-categories", equipmentCategoriesRouter);
//appRouter.use("/traits", traitRouter);

export default appRouter;
