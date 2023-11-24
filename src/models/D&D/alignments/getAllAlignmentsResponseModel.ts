import { Alignment } from "./alignmentModel";

export interface GetAllAlignmentsResponse {
  count: number;
  results: Alignment[];
}