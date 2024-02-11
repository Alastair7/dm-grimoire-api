import "reflect-metadata";
import { ClassService } from "../../../services/Class/ClassService";
import { Request, Response } from "express";
import { ClassController } from "../../../controllers/classController";
import { DndService } from "../../../third-party/d&d/DndService";
import { GetSingleClassResponse } from "../../../models/D&D/classes/getSingleClassResponseModel";

jest.mock("../../../services/Class/ClassService");
jest.mock("../../../third-party/d&d/DndService");

describe("ClassController", () => {
  let mClassService: ClassService;

  let mRequest: Partial<Request>;
  let mResponse: Partial<Response>;

  let controller: ClassController;

  beforeEach(() => {
    mClassService = new ClassService(new DndService());

    const index: string = "test";
    mRequest = {
      params: { index },
    };
    mResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };

    controller = new ClassController(mClassService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should return a GetClassModel", async () => {
    const index = mRequest.params?.index;

    const mockResponse: GetSingleClassResponse = {
      index: index,
      name: "test",
      hit_die: "",
    };

    jest.spyOn(mClassService, "getClass").mockResolvedValue(mockResponse);

    await controller.getClass(mRequest as Request, mResponse as Response);

    expect(index).toBe("test");
    expect(mResponse.json).toHaveBeenCalledWith(mockResponse);
    expect(mResponse.status).toHaveBeenCalledWith(200);
  });

  it("Should return error when exception", async () => {
    const errorMessage = "Any error message";

    jest
      .spyOn(mClassService, "getClass")
      .mockRejectedValue(new Error(errorMessage));

    await controller.getClass(mRequest as Request, mResponse as Response);

    expect(mResponse.json).toHaveBeenCalledWith(new Error(errorMessage));
    expect(mResponse.status).toHaveBeenCalledWith(400);
  });
});
