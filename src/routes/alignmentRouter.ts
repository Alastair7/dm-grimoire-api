import { Router } from "express";
import { AlignmentService } from "../services/Alignment/alignmentService";
import { IAlignmentService } from "../services/Alignment/iAlignmentService";
import { AlignmentController } from "../controllers/alignmentController";

const alignmentRouter = Router();

const alignmentService: IAlignmentService = new AlignmentService();
const alignmentController = new AlignmentController(alignmentService);

alignmentRouter.get("/", alignmentController.getAllAlignments);
alignmentRouter.get("/:name", alignmentController.getAlignment);

export default alignmentRouter;