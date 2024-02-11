import "reflect-metadata";
import { EquipmentCategoriesService } from "../../../services/Equipment-Categories/equipmentCategoriesService";
import { Request, Response } from "express";
import { EquipmentCategoriesController } from "../../../controllers/equipmentCategoriesController";
import { DndService } from "../../../third-party/d&d/DndService";
import { GetEquipmentCategoryResponse } from "../../../models/D&D/equipment-category/getEquipmentCategoryResponseModel";

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

    const index: string = "test";
    mRequest = {
      params: { index },
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
    const index = mRequest.params?.index;
    const mockResponse: GetEquipmentCategoryResponse = {
      index: index,
    };

    jest
      .spyOn(mEquipmentCategoriesService, "getEquipmentCategory")
      .mockResolvedValue(mockResponse);

    await controller.getEquipmentCategory(
      mRequest as Request,
      mResponse as Response
    );

    expect(mResponse.json).toHaveBeenCalledWith(mockResponse);
    expect(mResponse.status).toHaveBeenCalledWith(200);
  });

  it("should return error when exception or failure", async () => {
    const errorMessage = "Any error message";

    jest
      .spyOn(mEquipmentCategoriesService, "getEquipmentCategory")
      .mockRejectedValue(new Error(errorMessage));

    await controller.getEquipmentCategory(
      mRequest as Request,
      mResponse as Response
    );

    expect(mResponse.json).toHaveBeenCalledWith(new Error(errorMessage));
    expect(mResponse.status).toHaveBeenCalledWith(400);
  });
});
