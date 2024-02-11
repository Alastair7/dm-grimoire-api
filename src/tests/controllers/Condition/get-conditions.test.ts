import "reflect-metadata";
import { ConditionService } from "../../../services/Condition/conditionService";
import { Request, Response } from "express";
import { ConditionController } from "../../../controllers/conditionController";
import { DndService } from "../../../third-party/d&d/DndService";
import { GetConditionsResponse } from "../../../models/D&D/conditions/getConditionsResponseModel";

jest.mock("../../../services/Condition/conditionService");
jest.mock("../../../third-party/d&d/DndService");

describe("ConditionController", () => {
  let mConditionService: ConditionService;

  let mRequest: Partial<Request>;
  let mResponse: Partial<Response>;

  let controller: ConditionController;

  beforeEach(() => {
    mConditionService = new ConditionService(new DndService());

    mRequest = {
      body: {},
    };

    mResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };

    controller = new ConditionController(mConditionService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return data when success", async () => {
    const mockResponse: GetConditionsResponse = {
      count: 1,
      results: [],
    };

    jest
      .spyOn(mConditionService, "getConditions")
      .mockResolvedValue(mockResponse);

    await controller.getConditions(mRequest as Request, mResponse as Response);

    expect(mResponse.json).toHaveBeenCalledWith(mockResponse);
    expect(mResponse.status).toHaveBeenCalledWith(200);
  });
  it("should return error when exception or failed", async () => {
    const errorMessage = "Any error message";

    jest
      .spyOn(mConditionService, "getConditions")
      .mockRejectedValue(new Error(errorMessage));

    await controller.getConditions(mRequest as Request, mResponse as Response);

    expect(mResponse.json).toHaveBeenCalledWith(new Error(errorMessage));
    expect(mResponse.status).toHaveBeenCalledWith(400);
  });
});
