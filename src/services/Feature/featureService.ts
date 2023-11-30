import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetAllFeaturesResponseModel } from "../../models/D&D/features/getAllFeaturesResponseModel";
import { IFeatureService } from "./iFeatureService";
import { GetFeatureResponseModel } from "../../models/D&D/features/getFeatureResponseModel";

export class FeatureService implements IFeatureService {
  async getFeatures(): Promise<GetAllFeaturesResponseModel> {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };

      const response: AxiosResponse<GetAllFeaturesResponseModel> = await axios.get(
        "https://www.dnd5eapi.co/api/features",
        requestConfig
      );

      const featuresData: GetAllFeaturesResponseModel = {
        count: response.data.count,
        results: response.data.results.map((featureInfo) => ({
          index: featureInfo.index,
          name: featureInfo.name,
          url: featureInfo.url,
        })),
      };

      return Promise.resolve(featuresData);
    } catch (error) {
      throw error;
    }
  }

  async getFeature(index: string): Promise<GetFeatureResponseModel> {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };

      const response: AxiosResponse<GetFeatureResponseModel> = await axios.get(
        `https://www.dnd5eapi.co/api/features/${index}`,
        requestConfig
      );

      const featureData: GetFeatureResponseModel = {
        index: response.data.index,
        class: {
          index: response.data.class?.index,
          name: response.data.class?.name,
          url: response.data.class?.url,
        },
        name: response.data.name,
        level: response.data.level,
        prerequisites: response.data.prerequisites,
        desc: response.data.desc,
        url: response.data.url,
      };

      return Promise.resolve(featureData);
    } catch (error) {
      throw error;
    }
  }
}