import { Request, Response } from "express";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetClassesResponse } from "../models/D&D/classes/getClassesResponseModel";
import { GetSingleClassResponse } from "../models/D&D/classes/getSingleClassResponseModel";

export const getClasses = async (req: Request, res: Response) => {
  try {
    const requestConfig: AxiosRequestConfig = {
      headers: { Accept: "application/json" },
      timeout: 30000,
    };

    const response: AxiosResponse<GetClassesResponse> = await axios.get(
      "https://www.dnd5eapi.co/api/classes",
      requestConfig
    );
    const classesData: GetClassesResponse = {
      count: response.data.count,
      results: response.data.results.map((classInfo) => ({
        index: classInfo.index,
        name: classInfo.name,
      })),
    };

    res.status(200).send(classesData);
  } catch (error) {
    res.status(400).send(`Error: ${error}`);
  }
};

// Get a specific single class
export const getClass = async (req: Request, res: Response) => {
  const { name } = req.params;
  try {
    const requestConfig: AxiosRequestConfig = {
      headers: { Accept: "application/json" },
      timeout: 30000,
    };

    const response: AxiosResponse<GetSingleClassResponse> = await axios.get(
      `https://www.dnd5eapi.co/api/classes/${name}`,
      requestConfig
    );
    const classData = {
      index: response.data.index,
      name: response.data.name,
      hit_die: response.data.hit_die,
    };
    
    res.status(200).send(classData);
  } catch (error) {
    res.status(400).send(`Error: ${error}`);
  }
};
