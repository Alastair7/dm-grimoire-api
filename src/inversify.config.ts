import { Container } from "inversify";
import { IDndService } from "./third-party/d&d/IDndService";
import TYPES from "./utils/DI/types";
import { DndService } from "./third-party/d&d/DndService";
import { iAbilityScoreService } from "./services/Ability_Score/iAbilityScoreService";
import { AbilityScoreService } from "./services/Ability_Score/abilityScoreService";
import { IAlignmentService } from "./services/Alignment/iAlignmentService";
import { AlignmentService } from "./services/Alignment/alignmentService";

import "./controllers/abilityScoreController";
import "./controllers/alignmentController";

const container = new Container();

container.bind<IDndService>(TYPES.IDndService).to(DndService);
container
  .bind<iAbilityScoreService>(TYPES.iAbilityScoreService)
  .to(AbilityScoreService);

container.bind<IAlignmentService>(TYPES.iAlignmentService).to(AlignmentService);

export default container;
