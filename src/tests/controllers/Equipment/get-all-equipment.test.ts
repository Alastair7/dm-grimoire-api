import "reflect-metadata";
import { EquipmentService } from "../../../services/Equipment/equipmentService";
import { Request, Response } from "express";
import { EquipmentController } from "../../../controllers/equipmentController";
import { DndService } from "../../../third-party/d&d/DndService";
import { GetAllEquipmentResponse } from "../../../models/D&D/equipment/getAllEquipmentResponseModel";

jest.mock("../../../services/Equipment/equipmentService");
jest.mock("../../../third-party/d&d/DndService");

describe("EquipmentController", () => {
  let mEquipmentService: EquipmentService;

  let mRequest: Partial<Request>;
  let mResponse: Partial<Response>;

  let controller: EquipmentController;

  beforeEach(() => {
    mEquipmentService = new EquipmentService(new DndService());

    mRequest = {
      params: {},
    };

    mResponse = {
      json: jest.fn().mockReturnThis(),
      status: jest.fn().mockReturnThis(),
    };

    controller = new EquipmentController(mEquipmentService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return data when success", async () => {
    const mockResponse: GetAllEquipmentResponse = {
      count: 1,
      results: [],
    };

    jest
      .spyOn(mEquipmentService, "getAllEquipment")
      .mockResolvedValue(mockResponse);

    await controller.getAllEquipment(
      mRequest as Request,
      mResponse as Response
    );

    expect(mResponse.json).toHaveBeenCalledWith(mockResponse);
    expect(mResponse.status).toHaveBeenCalledWith(200);
  });

  it("should return error when failure or exception", async () => {
    const errorMessage = "Any error message";

    jest
      .spyOn(mEquipmentService, "getAllEquipment")
      .mockRejectedValue(new Error(errorMessage));

    await controller.getAllEquipment(
      mRequest as Request,
      mResponse as Response
    );

    expect(mResponse.json).toHaveBeenCalledWith(new Error(errorMessage));
    expect(mResponse.status).toHaveBeenCalledWith(400);
  });
});
