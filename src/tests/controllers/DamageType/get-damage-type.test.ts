import "reflect-metadata";
import { DamageTypeService } from "../../../services/Damage_Type/damageTypeService";
import { Request, Response } from "express";
import { DamageTypeController } from "../../../controllers/damageTypeController";
import { DndService } from "../../../third-party/d&d/DndService";
import { GetDamageTypeResponse } from "../../../models/D&D/damage_types/getDamageTypeResponseModel";

jest.mock("../../../services/Damage_Type/damageTypeService");
jest.mock("../../../third-party/d&d/DndService");

describe("DamageTypeController", () => {
  let mDamageTypeService: DamageTypeService;

  let mRequest: Partial<Request>;
  let mResponse: Partial<Response>;

  let controller: DamageTypeController;

  beforeEach(() => {
    mDamageTypeService = new DamageTypeService(new DndService());

    const index: string = "test";
    mRequest = {
      params: { index },
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
    const index = mRequest.params?.index;
    const mockResponse: GetDamageTypeResponse = {
      index: index,
    };

    jest
      .spyOn(mDamageTypeService, "getDamageType")
      .mockResolvedValue(mockResponse);

    await controller.getDamageType(mRequest as Request, mResponse as Response);

    expect(index).toBe("test");
    expect(mResponse.json).toHaveBeenCalledWith(mockResponse);
    expect(mResponse.status).toHaveBeenCalledWith(200);
  });

  it("should return error if exceptions or failure", async () => {
    const errorMessage = "Any error message";

    jest
      .spyOn(mDamageTypeService, "getDamageType")
      .mockRejectedValue(new Error(errorMessage));

    await controller.getDamageType(mRequest as Request, mResponse as Response);

    expect(mResponse.json).toHaveBeenCalledWith(new Error(errorMessage));
    expect(mResponse.status).toHaveBeenCalledWith(400);
  });
});
