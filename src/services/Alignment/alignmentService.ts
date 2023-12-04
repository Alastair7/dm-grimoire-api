import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetAlignmentResponse } from "../../models/D&D/alignments/getAlignmentResponseModel";
import { IAlignmentService } from "./iAlignmentService";
import { GetAllAlignmentsResponse } from "../../models/D&D/alignments/getAllAlignmentsResponseModel";

export class AlignmentService implements IAlignmentService {
  async getAllAlignments(): Promise<GetAllAlignmentsResponse> {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };
      const response: AxiosResponse<GetAllAlignmentsResponse> = await axios.get(
        "https://www.dnd5eapi.co/api/alignments",
        requestConfig
      );
      const alignmentData: GetAllAlignmentsResponse = response.data;
      return Promise.resolve(alignmentData);
    } catch (error) {
      throw error;
    }
  }

  async getAlignment(name: string): Promise<any> {
    try {
      const requestConfig: AxiosRequestConfig = {
        headers: { Accept: "application/json" },
        timeout: 30000,
      };

      const response: AxiosResponse<GetAlignmentResponse> = await axios.get(
        `https://www.dnd5eapi.co/api/alignments/${name}`,
        requestConfig
      );
      const alignmentData = {
        index: response.data.index,
        name: response.data.name,
        abbreviation: response.data.abbreviation,
        desc: response.data.desc,
      };
      return Promise.resolve(alignmentData);
    } catch (error) {
      throw error;
    }
  }
}
