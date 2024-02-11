import "reflect-metadata";
import { DamageTypeService } from "../../../services/Damage_Type/damageTypeService";
import { Request, Response } from "express";
import { DamageTypeController } from "../../../controllers/damageTypeController";
import { DndService } from "../../../third-party/d&d/DndService";
import { GetAllDamageTypesResponse } from "../../../models/D&D/damage_types/getAllDamageTypesResponseModel";

jest.mock("../../../services/Damage_Type/damageTypeService");
jest.mock("../../../third-party/d&d/DndService");

describe("DamageTypeController", () => {
  let mDamageTypeService: DamageTypeService;

  let mRequest: Partial<Request>;
  let mResponse: Partial<Response>;

  let controller: DamageTypeController;

  beforeEach(() => {
    mDamageTypeService = new DamageTypeService(new DndService());

    mRequest = {
      body: {},
    };

    mResponse = {
      json: jest.fn().mockReturnThis(),
      status: jest.fn().mockReturnThis(),
    };

    controller = new DamageTypeController(mDamageTypeService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return data if success", async () => {
    const mockResponse: GetAllDamageTypesResponse = {
      count: 1,
      results: [],
    };

    jest
      .spyOn(mDamageTypeService, "getAllDamageTypes")
      .mockResolvedValue(mockResponse);

    await controller.getAllDamageTypes(
      mRequest as Request,
      mResponse as Response
    );

    expect(mResponse.json).toHaveBeenCalledWith(mockResponse);
    expect(mResponse.status).toHaveBeenCalledWith(200);
  });

  it("should return error if exceptions or failure", async () => {
    const errorMessage = "Any error message";

    jest
      .spyOn(mDamageTypeService, "getAllDamageTypes")
      .mockRejectedValue(new Error(errorMessage));
    await controller.getAllDamageTypes(
      mRequest as Request,
      mResponse as Response
    );

    expect(mResponse.json).toHaveBeenCalledWith(new Error(errorMessage));
    expect(mResponse.status).toHaveBeenCalledWith(400);
  });
});
