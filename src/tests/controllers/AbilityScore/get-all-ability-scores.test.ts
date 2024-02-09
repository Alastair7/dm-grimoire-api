import "reflect-metadata";
import { Request, Response } from "express";
import { AbilityScoreController } from "../../../controllers/abilityScoreController";
import { GetAllAbilityScoresResponse } from "../../../models/D&D/ability_scores/getAllAbilityScoresResponseModel";
import { AbilityScoreService } from "../../../services/Ability_Score/abilityScoreService";
import { DndService } from "../../../third-party/d&d/DndService";

jest.mock("../../../services/Ability_Score/abilityScoreService");
jest.mock("../../../third-party/d&d/DndService");

describe("AbilityScoreController", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Check if AbilityScoreService is called", async () => {
    const abilityScoreService = new AbilityScoreService(new DndService());
    const mockResponse: GetAllAbilityScoresResponse = {
      count: 1,
      results: [
        /* Add your mock data here */
      ],
    };

    const mRequest: Partial<Request> = {
      body: {},
    };
    const mResponse: Partial<Response> = {
      statusCode: 200,
      json: jest.fn().mockReturnThis(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    };

    jest
      .spyOn(abilityScoreService, "getAllAbilityScores")
      .mockResolvedValue(mockResponse);

    const controller = new AbilityScoreController(abilityScoreService);
    await controller.getAllAbilityScores(
      mRequest as Request,
      mResponse as Response
    );

    expect(mResponse.json).toHaveBeenCalledWith(mockResponse);
    expect(mResponse.status).toHaveBeenCalledWith(200);
  });
});
