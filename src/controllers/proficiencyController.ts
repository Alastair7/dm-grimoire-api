import { Request, Response } from "express";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetAllProficienciesResponse } from "../models/D&D/proficiencies/getAllProficienciesResponseModel";


export const getAllProficiencies = async (req: Request, res: Response) => {
  try {
    const requestConfig: AxiosRequestConfig = {
      headers: { Accept: "application/json" },
      timeout: 30000,
    };

    const response: AxiosResponse<GetAllProficienciesResponse> = await axios.get(
      "https://www.dnd5eapi.co/api/proficiencies",
      requestConfig
    );
    const proficienciesData: GetAllProficienciesResponse = {
      count: response.data.count,
      results: response.data.results.map((proficienciesInfo) => ({
        index: proficienciesInfo.index,
        name: proficienciesInfo.name,
        url: proficienciesInfo.url,
      })),
    };

    res.status(200).send(proficienciesData);
  } catch (error) {
    res.status(400).send(`Error: ${error}`);
  }
};