import { Request, Response } from "express";
import { AbilityScoreController } from "../../../controllers/abilityScoreController";
import { AbilityScoreService } from "../../../services/Ability_Score/abilityScoreService";
import { DndService } from "../../../third-party/d&d/DndService";
import { AbilityScore } from "../../../models/D&D/ability_scores/abilityScoreModel";

jest.mock("../../../services/Ability_Score/abilityScoreService");
jest.mock("../../../third-party/d&d/DndService");

describe("AbilityController", () => {
  let mAbilityScoreService: AbilityScoreService;
  let mRequest: Partial<Request>;
  let mResponse: Partial<Response>;
  let controller: AbilityScoreController;

  beforeEach(() => {
    mAbilityScoreService = new AbilityScoreService(new DndService());
    const index: string = "test";

    mRequest = {
      params: { index },
    };

    mResponse = {
      json: jest.fn().mockReturnThis(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    };

    controller = new AbilityScoreController(mAbilityScoreService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("GetAbilityScore returns an AbilityScore model", async () => {
    const index = mRequest.params?.index;
    const mockResponse: AbilityScore = {
      index: index,
      name: "test",
    };

    jest
      .spyOn(mAbilityScoreService, "getAbilityScore")
      .mockResolvedValue(mockResponse);

    await controller.getAbilityScore(
      mRequest as Request,
      mResponse as Response
    );

    expect(index).toBe("test");
    expect(mResponse.json).toHaveBeenCalledWith(mockResponse);
    expect(mResponse.status).toHaveBeenCalledWith(200);
  });

  it("GetAbilityScore returns an error when exception", async () => {
    const errorMessage = "Error Internal Server";

    jest
      .spyOn(mAbilityScoreService, "getAbilityScore")
      .mockRejectedValue(new Error(errorMessage));

    await controller.getAbilityScore(
      mRequest as Request,
      mResponse as Response
    );

    expect(mResponse.json).toHaveBeenCalledWith(new Error(errorMessage));
    expect(mResponse.status).toHaveBeenCalledWith(400);
  });
});
