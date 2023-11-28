import { Request, Response } from "express";
import { IAlignmentService } from "../services/Alignment/iAlignmentService";

export class AlignmentController{
  private alignmentService: IAlignmentService;

  constructor(alignmentService: IAlignmentService){
    this.alignmentService = alignmentService;
  }

  getAllAlignments = async (req: Request, res: Response) => {
    try{
      const response = await this.alignmentService.getAllAlignments();
      res.status(200).json(response);
    }catch(error){
      throw error;
    }
  };

  getAlignment = async (req: Request, res: Response) => {
    try{
      const { name } = req.params;
      const response = await this.alignmentService.getAlignment(name);
      res.status(200).json(response);
    }catch(error){
      throw error;
    }
  };
}