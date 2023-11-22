import { Request, Response } from "express";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetAllDamageTypesResponse } from "../models/D&D/damage_types/getAllDamageTypesResponseModel";
import { GetDamageTypeResponse } from "../models/D&D/damage_types/getDamageTypeResponseModel";

export const getAllDamageTypes = async (req: Request, res: Response) => {
  try {
    const requestConfig: AxiosRequestConfig = {
      headers: { Accept: "application/json" },
      timeout: 30000,
    };

    const response: AxiosResponse<GetAllDamageTypesResponse> = await axios.get(
      "https://www.dnd5eapi.co/api/damage-types",
      requestConfig
    );
    const damageTypesData: GetAllDamageTypesResponse = {
      count: response.data.count,
      results: response.data.results.map((damageTypesInfo) => ({
        index: damageTypesInfo.index,
        name: damageTypesInfo.name,
        url: damageTypesInfo.url,
      })),
    };

    res.status(200).send(damageTypesData);
  } catch (error) {
    res.status(400).send(`Error: ${error}`);
  }
};

export const getDamageType = async (req: Request, res: Response) => {
  const { name } = req.params;
  try {
    const requestConfig: AxiosRequestConfig = {
      headers: { Accept: "application/json" },
      timeout: 30000,
    };

    const response: AxiosResponse<GetDamageTypeResponse> = await axios.get(
      `https://www.dnd5eapi.co/api/damage-types/${name}`,
      requestConfig
    );
    const damageTypeData = {
      index: response.data.index,
      name: response.data.name,
      desc: response.data.desc,
    };
    
    res.status(200).send(damageTypeData);
  } catch (error) {
    res.status(400).send(`Error: ${error}`);
  }
};