import "reflect-metadata";
import { ConditionController } from "../../../controllers/conditionController";
import { ConditionService } from "../../../services/Condition/conditionService";
import { DndService } from "../../../third-party/d&d/DndService";
import { Request, Response } from "express";
import { GetConditionResponse } from "../../../models/D&D/conditions/getConditionResponseModel";

jest.mock("../../../services/Condition/conditionService");
jest.mock("../../../third-party/d&d/DndService");

describe("ConditionController", () => {
  let mConditionService: ConditionService;

  let mRequest: Partial<Request>;
  let mResponse: Partial<Response>;

  let controller: ConditionController;

  beforeEach(() => {
    mConditionService = new ConditionService(new DndService());

    const index: string = "test";
    mRequest = {
      params: { index },
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

  it("should return condition data when success", async () => {
    const index = mRequest.params?.index;

    const mockResponse: GetConditionResponse = {
      index: index,
      desc: [],
    };

    jest
      .spyOn(mConditionService, "getCondition")
      .mockResolvedValue(mockResponse);

    await controller.getCondition(mRequest as Request, mResponse as Response);

    expect(mResponse.json).toHaveBeenCalledWith(mockResponse);
    expect(mResponse.status).toHaveBeenCalledWith(200);
  });

  it("should return error when expection or fail", async () => {
    const errorMessage = "Any error mesasge";

    jest
      .spyOn(mConditionService, "getCondition")
      .mockRejectedValue(new Error(errorMessage));

    await controller.getCondition(mRequest as Request, mResponse as Response);

    expect(mResponse.json).toHaveBeenCalledWith(new Error(errorMessage));
    expect(mResponse.status).toHaveBeenCalledWith(400);
  });
});
