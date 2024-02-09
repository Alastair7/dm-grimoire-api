import "reflect-metadata";
import { Request, Response } from "express";
import { AbilityScoreController } from "../../../controllers/abilityScoreController";
import { GetAllAbilityScoresResponse } from "../../../models/D&D/ability_scores/getAllAbilityScoresResponseModel";
import { AbilityScoreService } from "../../../services/Ability_Score/abilityScoreService";
import { DndService } from "../../../third-party/d&d/DndService";

jest.mock("../../../services/Ability_Score/abilityScoreService");
jest.mock("../../../third-party/d&d/DndService");

describe("AbilityScoreController", () => {
  let abilityScoreService: AbilityScoreService;
  let mockResponse: GetAllAbilityScoresResponse;
  let mRequest: Partial<Request>;
  let mResponse: Partial<Response>;
  let controller: AbilityScoreController;

  beforeEach(() => {
    abilityScoreService = new AbilityScoreService(new DndService());

    mRequest = {
      body: {},
    };
    mResponse = {
      json: jest.fn().mockReturnThis(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    };

    controller = new AbilityScoreController(abilityScoreService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("GetAllAbilityScores returns data", async () => {
    const mockResponse: GetAllAbilityScoresResponse = {
      count: 1,
      results: [],
    };

    jest
      .spyOn(abilityScoreService, "getAllAbilityScores")
      .mockResolvedValue(mockResponse);

    await controller.getAllAbilityScores(
      mRequest as Request,
      mResponse as Response
    );

    expect(mResponse.json).toHaveBeenCalledWith(mockResponse);
    expect(mResponse.status).toHaveBeenCalledWith(200);
  });

  it("GetAllAbilityScores returns error", async () => {
    const errorMessage = "Error internal server";
    jest
      .spyOn(abilityScoreService, "getAllAbilityScores")
      .mockRejectedValue(new Error(errorMessage));

    await controller.getAllAbilityScores(
      mRequest as Request,
      mResponse as Response
    );

    expect(mResponse.json).toHaveBeenCalledWith(new Error(errorMessage));
    expect(mResponse.status).toHaveBeenCalledWith(400);
  });
});
