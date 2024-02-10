import "reflect-metadata";

import { Request, Response } from "express";
import { DndService } from "../../../third-party/d&d/DndService";
import { AlignmentController } from "../../../controllers/alignmentController";
import { AlignmentService } from "../../../services/Alignment/alignmentService";
import { Alignment } from "../../../models/D&D/alignments/alignmentModel";

jest.mock("../../../services/Alignment/alignmentService");
jest.mock("../../../third-party/d&d/DndService");

describe("AlignmentController", () => {
  let mAlignmentService: AlignmentService;
  let mRequest: Partial<Request>;
  let mResponse: Partial<Response>;
  let controller: AlignmentController;

  beforeEach(() => {
    const index: string = "test";
    mAlignmentService = new AlignmentService(new DndService());

    mRequest = {
      params: { index },
    };
    mResponse = {
      json: jest.fn().mockReturnThis(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    };

    controller = new AlignmentController(mAlignmentService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("GetAlignment returns data", async () => {
    const index = mRequest.params?.index;
    const mockResponse: Alignment = {
      index: index,
      name: "test",
      desc: "test",
      abbreviation: "t",
    };

    jest
      .spyOn(mAlignmentService, "getAlignment")
      .mockResolvedValue(mockResponse);

    await controller.getAlignment(mRequest as Request, mResponse as Response);

    expect(index).toBe("test");
    expect(mResponse.json).toHaveBeenCalledWith(mockResponse);
    expect(mResponse.status).toHaveBeenCalledWith(200);
  });

  it("GetAlignment returns error when exception", async () => {
    const errorMessage = "Error internal server";

    jest
      .spyOn(mAlignmentService, "getAlignment")
      .mockRejectedValue(new Error(errorMessage));

    await controller.getAlignment(mRequest as Request, mResponse as Response);

    expect(mResponse.json).toHaveBeenCalledWith(new Error(errorMessage));
    expect(mResponse.status).toHaveBeenCalledWith(400);
  });
});
