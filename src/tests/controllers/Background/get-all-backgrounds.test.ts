import "reflect-metadata";
import { BackgroundService } from "../../../services/Background/backgroundService";
import { Request, Response } from "express";
import { BackgroundController } from "../../../controllers/backgroundController";
import { DndService } from "../../../third-party/d&d/DndService";
import { GetAllBackgroundResponse } from "../../../models/D&D/backgrounds/getAllBackgroundsResponseModel";

jest.mock("../../../services/Background/backgroundService");
jest.mock("../../../third-party/d&d/DndService");

describe("BackgroundController", () => {
  let mBackgroundService: BackgroundService;

  let mRequest: Partial<Request>;
  let mResponse: Partial<Response>;

  let controller: BackgroundController;

  beforeEach(() => {
    mBackgroundService = new BackgroundService(new DndService());

    mRequest = {
      body: {},
    };

    mResponse = {
      json: jest.fn().mockReturnThis(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    };

    controller = new BackgroundController(mBackgroundService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("GetAllBackgrounds returns data", async () => {
    const mockResponse: GetAllBackgroundResponse = {
      count: 1,
      results: [],
    };

    jest
      .spyOn(mBackgroundService, "getAllBackgrounds")
      .mockResolvedValue(mockResponse);

    await controller.getAllBackgrounds(
      mRequest as Request,
      mResponse as Response
    );

    expect(mResponse.json).toHaveBeenCalledWith(mockResponse);
    expect(mResponse.status).toHaveBeenCalledWith(200);
  });

  it("GetAllBackgrounds returns error when exceptionn", async () => {
    const errorMessage = "Error Internal Server";

    jest
      .spyOn(mBackgroundService, "getAllBackgrounds")
      .mockRejectedValue(new Error(errorMessage));

    await controller.getAllBackgrounds(
      mRequest as Request,
      mResponse as Response
    );

    expect(mResponse.json).toHaveBeenCalledWith(new Error(errorMessage));
    expect(mResponse.status).toHaveBeenCalledWith(400);
  });
});
