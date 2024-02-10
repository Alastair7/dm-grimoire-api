import "reflect-metadata";
import { BackgroundService } from "../../../services/Background/backgroundService";
import { Request, Response } from "express";
import { BackgroundController } from "../../../controllers/backgroundController";
import { DndService } from "../../../third-party/d&d/DndService";
import { GetBackgroundResponse } from "../../../models/D&D/backgrounds/getBackgroundResponseModel";

jest.mock("../../../services/Background/backgroundService");
jest.mock("../../../third-party/d&d/DndService");

describe("BackgroundController", () => {
  let mBackgroundService: BackgroundService;

  let mRequest: Partial<Request>;
  let mResponse: Partial<Response>;

  let controller: BackgroundController;

  beforeEach(() => {
    mBackgroundService = new BackgroundService(new DndService());

    const index: string = "test";
    mRequest = {
      params: { index },
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

  it("GetBackground returns a background model", async () => {
    const index = mRequest.params?.index;
    const mockResponse: GetBackgroundResponse = {
      index: index,
      name: "test",
    };

    jest
      .spyOn(mBackgroundService, "getBackground")
      .mockResolvedValue(mockResponse);

    await controller.getBackground(mRequest as Request, mResponse as Response);

    expect(index).toBe("test");
    expect(mResponse.json).toHaveBeenCalledWith(mockResponse);
    expect(mResponse.status).toHaveBeenCalledWith(200);
  });

  it("GetBackground returns error when exception", async () => {
    const errorMessage = "Error internal server";

    jest
      .spyOn(mBackgroundService, "getBackground")
      .mockRejectedValue(new Error(errorMessage));

    await controller.getBackground(mRequest as Request, mResponse as Response);

    expect(mResponse.json).toHaveBeenCalledWith(new Error(errorMessage));
    expect(mResponse.status).toHaveBeenCalledWith(400);
  });
});
