import { ApiRequestTypes } from "../../common/enums/apiRequestTypes";

export interface IDndService {
  get<T>(index: string, requestType: ApiRequestTypes): Promise<T>;
  getAll<T>(requestType: ApiRequestTypes): Promise<T>;
}
