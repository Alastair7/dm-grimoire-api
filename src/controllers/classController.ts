import { Request, Response } from "express";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetClassesResponse } from "../models/D&D/classes/getClassesResponseModel";

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


export const getClass = async (req: Request, res: Response) => {
  const { name } = req.params;
  try {
    const requestConfig: AxiosRequestConfig = {
      headers: { Accept: "application/json" },
      timeout: 30000,
    };

    const response: AxiosResponse<GetClassesResponse> = await axios.get(
      `https://www.dnd5eapi.co/api/classes/${name}`,
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
