import {CobraButtonConfig} from "./cobraButtonConfig";
import {CobraElementFactoryBase} from "./cobraElementFactoryBase";
import {CobraButtonDefinition} from "./cobraButtonDefinition";

/**
 * Cobra Button Factory
 */
export class CobraButtonFactory extends CobraElementFactoryBase<CobraButtonDefinition, CobraButtonConfig> {
  constructor(config: CobraButtonConfig) {
    super(config, CobraButtonDefinition);
  }



}
