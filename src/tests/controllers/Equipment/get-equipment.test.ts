import "reflect-metadata";
import { EquipmentService } from "../../../services/Equipment/equipmentService";
import { Request, Response } from "express";
import { EquipmentController } from "../../../controllers/equipmentController";
import { DndService } from "../../../third-party/d&d/DndService";
import { GetAllEquipmentResponse } from "../../../models/D&D/equipment/getAllEquipmentResponseModel";
import { GetEquipmentResponse } from "../../../models/D&D/equipment/getEquipmentResponseModel";

jest.mock("../../../services/Equipment/equipmentService");
jest.mock("../../../third-party/d&d/DndService");

describe("EquipmentController", () => {
  let mEquipmentService: EquipmentService;

  let mRequest: Partial<Request>;
  let mResponse: Partial<Response>;

  let controller: EquipmentController;

  beforeEach(() => {
    mEquipmentService = new EquipmentService(new DndService());

    const index: string = "test";
    mRequest = {
      params: { index },
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
    const index = mRequest.params?.index;

    const mockResponse: GetEquipmentResponse = {
      index: index,
    };

    jest
      .spyOn(mEquipmentService, "getEquipment")
      .mockResolvedValue(mockResponse);

    await controller.getEquipment(mRequest as Request, mResponse as Response);

    expect(index).toBe("test");
    expect(mResponse.json).toHaveBeenCalledWith(mockResponse);
    expect(mResponse.status).toHaveBeenCalledWith(200);
  });

  it("should return error when failure or exception", async () => {
    const errorMessage = "Any error message";

    jest
      .spyOn(mEquipmentService, "getEquipment")
      .mockRejectedValue(new Error(errorMessage));

    await controller.getEquipment(mRequest as Request, mResponse as Response);

    expect(mResponse.json).toHaveBeenCalledWith(new Error(errorMessage));
    expect(mResponse.status).toHaveBeenCalledWith(400);
  });
});
