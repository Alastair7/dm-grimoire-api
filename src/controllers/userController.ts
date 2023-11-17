import { Request, Response } from "express";
// Get Users
export const getUsers = (req: Request, res: Response) => {
  res.status(200).json("You called to GetUsers endpoint");
};

// Get User
export const getUser = (req: Request, res: Response) => {
  res.status(200).json("You called to GetUser endpoint");
};
