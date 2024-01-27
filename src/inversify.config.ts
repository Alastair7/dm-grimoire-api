import { Container } from "inversify";
import { IDndService } from "./third-party/d&d/IDndService";
import TYPES from "./utils/DI/types";
import { DndService } from "./third-party/d&d/DndService";
import { iAbilityScoreService } from "./services/Ability_Score/iAbilityScoreService";
import { AbilityScoreService } from "./services/Ability_Score/abilityScoreService";
import { IAlignmentService } from "./services/Alignment/iAlignmentService";
import { AlignmentService } from "./services/Alignment/alignmentService";
import { iBackgroundService } from "./services/Background/iBackgroundService";
import { BackgroundService } from "./services/Background/backgroundService";
import { IConditionService } from "./services/Condition/iConditionService";
import { ConditionService } from "./services/Condition/conditionService";
import { IClassService } from "./services/Class/iClassService";
import { ClassService } from "./services/Class/ClassService";

import "./controllers/abilityScoreController";
import "./controllers/alignmentController";
import "./controllers/backgroundController";
import "./controllers/conditionController";
import "./controllers/classController";

const container = new Container();

container.bind<IDndService>(TYPES.IDndService).to(DndService);
container
  .bind<iAbilityScoreService>(TYPES.iAbilityScoreService)
  .to(AbilityScoreService);

container.bind<IAlignmentService>(TYPES.iAlignmentService).to(AlignmentService);
container
  .bind<iBackgroundService>(TYPES.iBackgroundService)
  .to(BackgroundService);

container.bind<IConditionService>(TYPES.iConditionService).to(ConditionService);
container.bind<IClassService>(TYPES.iClassService).to(ClassService);

export default container;
