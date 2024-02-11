import "reflect-metadata";
import { EquipmentCategoriesService } from "../../../services/Equipment-Categories/equipmentCategoriesService";
import { Request, Response } from "express";
import { EquipmentCategoriesController } from "../../../controllers/equipmentCategoriesController";
import { DndService } from "../../../third-party/d&d/DndService";
import { GetEquipmentCategoriesResponse } from "../../../models/D&D/equipment-category/getEquipmentCategoriesResponseModel";

jest.mock("../../../services/Equipment-Categories/equipmentCategoriesService");
jest.mock("../../../third-party/d&d/DndService");

describe("EquipmentCategoriesController", () => {
  let mEquipmentCategoriesService: EquipmentCategoriesService;

  let mRequest: Partial<Request>;
  let mResponse: Partial<Response>;

  let controller: EquipmentCategoriesController;

  beforeEach(() => {
    mEquipmentCategoriesService = new EquipmentCategoriesService(
      new DndService()
    );

    mRequest = {
      body: {},
    };

    mResponse = {
      json: jest.fn().mockReturnThis(),
      status: jest.fn().mockReturnThis(),
    };

    controller = new EquipmentCategoriesController(mEquipmentCategoriesService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return data when success", async () => {
    const mockResponse: GetEquipmentCategoriesResponse = {
      count: 1,
      results: [],
    };

    jest
      .spyOn(mEquipmentCategoriesService, "getEquipmentCategories")
      .mockResolvedValue(mockResponse);

    await controller.getEquipmentCategories(
      mRequest as Request,
      mResponse as Response
    );

    expect(mResponse.json).toHaveBeenCalledWith(mockResponse);
    expect(mResponse.status).toHaveBeenCalledWith(200);
  });

  it("should return error when exception or failure", async () => {
    const errorMessage = "Any error message";

    jest
      .spyOn(mEquipmentCategoriesService, "getEquipmentCategories")
      .mockRejectedValue(new Error(errorMessage));

    await controller.getEquipmentCategories(
      mRequest as Request,
      mResponse as Response
    );

    expect(mResponse.json).toHaveBeenCalledWith(new Error(errorMessage));
    expect(mResponse.status).toHaveBeenCalledWith(400);
  });
});
