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
import { IDamageTypeService } from "./services/Damage_Type/iDamageTypeService";
import { DamageTypeService } from "./services/Damage_Type/damageTypeService";
import { EquipmentCategoriesService } from "./services/Equipment-Categories/equipmentCategoriesService";
import { IEquipmentCategoriesService } from "./services/Equipment-Categories/iEquipmentCategoriesService";
import { EquipmentService } from "./services/Equipment/equipmentService";
import { IEquipmentService } from "./services/Equipment/iEquipmentService";
import { IFeatureService } from "./services/Feature/iFeatureService";
import { FeatureService } from "./services/Feature/featureService";
import { IMagicItemService } from "./services/Magic_Item/iMagicItemService";
import { MagicItemService } from "./services/Magic_Item/magicItemService";
import { IMonsterService } from "./services/Monster/iMonsterService";
import { MonsterService } from "./services/Monster/monsterService";

import "./controllers/abilityScoreController";
import "./controllers/alignmentController";
import "./controllers/backgroundController";
import "./controllers/conditionController";
import "./controllers/classController";
import "./controllers/damageTypeController";
import "./controllers/equipmentCategoriesController";
import "./controllers/equipmentController";
import "./controllers/featureController";
import "./controllers/magicItemController";
import "./controllers/monsterController";

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

container
  .bind<IDamageTypeService>(TYPES.iDamageTypeService)
  .to(DamageTypeService);

container
  .bind<IEquipmentCategoriesService>(TYPES.iEquipmentCategories)
  .to(EquipmentCategoriesService);

container.bind<IEquipmentService>(TYPES.IEquipmentService).to(EquipmentService);
container.bind<IFeatureService>(TYPES.iFeatureService).to(FeatureService);
container.bind<IMagicItemService>(TYPES.iMagicItemService).to(MagicItemService);
container.bind<IMonsterService>(TYPES.iMonsterService).to(MonsterService);

export default container;
