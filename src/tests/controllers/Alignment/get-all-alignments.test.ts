import "reflect-metadata";

import { Request, Response } from "express";
import { AlignmentService } from "../../../services/Alignment/alignmentService";
import { AlignmentController } from "../../../controllers/alignmentController";
import { DndService } from "../../../third-party/d&d/DndService";
import { GetAllAlignmentsResponse } from "../../../models/D&D/alignments/getAllAlignmentsResponseModel";

jest.mock("../../../services/Alignment/alignmentService");
jest.mock("../../../third-party/d&d/DndService");

describe("AlignmentController", () => {
  let mAlignmentService: AlignmentService;
  let mRequest: Partial<Request>;
  let mResponse: Partial<Response>;
  let controller: AlignmentController;

  beforeEach(() => {
    mAlignmentService = new AlignmentService(new DndService());
    mRequest = {
      body: {},
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

  it("GetAllAlignments should return data", async () => {
    const mockResponse: GetAllAlignmentsResponse = {
      count: 1,
      results: [],
    };

    jest
      .spyOn(mAlignmentService, "getAllAlignments")
      .mockResolvedValue(mockResponse);

    await controller.getAllAlignments(
      mRequest as Request,
      mResponse as Response
    );

    expect(mResponse.json).toHaveBeenCalledWith(mockResponse);
    expect(mResponse.status).toHaveBeenCalledWith(200);
  });

  it("GetAllAlignments should return error json", async () => {
    const errorMessage = "Internal Error Server";

    jest
      .spyOn(mAlignmentService, "getAllAlignments")
      .mockRejectedValue(new Error(errorMessage));

    await controller.getAllAlignments(
      mRequest as Request,
      mResponse as Response
    );

    expect(mResponse.json).toHaveBeenCalledWith(new Error(errorMessage));
    expect(mResponse.status).toHaveBeenCalledWith(400);
  });
});
