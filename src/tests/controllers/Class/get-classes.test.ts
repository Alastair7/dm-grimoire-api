import "reflect-metadata";
import { ClassService } from "../../../services/Class/ClassService";
import { Request, Response } from "express";
import { ClassController } from "../../../controllers/classController";
import { DndService } from "../../../third-party/d&d/DndService";
import { GetClassesResponse } from "../../../models/D&D/classes/getClassesResponseModel";

jest.mock("../../../services/Class/ClassService");
jest.mock("../../../third-party/d&d/DndService");

describe("ClassController", () => {
  let mClassService: ClassService;

  let mRequest: Partial<Request>;
  let mResponse: Partial<Response>;

  let controller: ClassController;

  beforeEach(() => {
    mClassService = new ClassService(new DndService());

    mRequest = {
      body: {},
    };

    mResponse = {
      json: jest.fn().mockReturnThis(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    };

    controller = new ClassController(mClassService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("GetClasses should return data", async () => {
    const mockResponse: GetClassesResponse = {
      count: 1,
      results: [],
    };

    jest.spyOn(mClassService, "getClasses").mockResolvedValue(mockResponse);

    await controller.getClasses(mRequest as Request, mResponse as Response);

    expect(mResponse.json).toHaveBeenCalledWith(mockResponse);
    expect(mResponse.status).toHaveBeenCalledWith(200);
  });

  it("GetClasses should return error when exception", async () => {
    const errorMessage = "Any possible error";

    jest
      .spyOn(mClassService, "getClasses")
      .mockRejectedValue(new Error(errorMessage));
    await controller.getClasses(mRequest as Request, mResponse as Response);

    expect(mResponse.json).toHaveBeenCalledWith(new Error(errorMessage));
    expect(mResponse.status).toHaveBeenCalledWith(400);
  });
});
