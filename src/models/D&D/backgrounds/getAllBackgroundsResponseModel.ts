import { Background } from "./backgroundModel";

export interface GetAllBackgroundResponse{
    count: number;
    results: Background[];
}