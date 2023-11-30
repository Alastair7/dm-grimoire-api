import { Feature } from "./featureModel";

export interface GetAllFeaturesResponseModel {
  count: number;
  results: Feature[];
}