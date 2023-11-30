import { GetAllFeaturesResponseModel } from "../../models/D&D/features/getAllFeaturesResponseModel";
import { GetFeatureResponseModel } from "../../models/D&D/features/getFeatureResponseModel";

export interface IFeatureService {
    getFeatures(): Promise<GetAllFeaturesResponseModel>;
    getFeature(index: string): Promise<GetFeatureResponseModel>;
}