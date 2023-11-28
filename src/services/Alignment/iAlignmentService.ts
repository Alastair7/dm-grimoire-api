import { GetAllAlignmentsResponse } from "../../models/D&D/alignments/getAllAlignmentsResponseModel";
import { GetAlignmentResponse } from "../../models/D&D/alignments/getAlignmentResponseModel";

export interface IAlignmentService {
  getAllAlignments(): Promise<GetAllAlignmentsResponse>;
  getAlignment(name: string): Promise<GetAlignmentResponse>;
}