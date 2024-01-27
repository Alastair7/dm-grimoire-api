import { GetClassesResponse } from "../../models/D&D/classes/getClassesResponseModel";
import { GetSingleClassResponse } from "../../models/D&D/classes/getSingleClassResponseModel";

export interface IClassService {
  getClasses(): Promise<GetClassesResponse>;
  getClass(index: string): Promise<GetSingleClassResponse>;
}
