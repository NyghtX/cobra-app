import {CobraButtonConfig} from "./cobraButtonConfig";
import {CobraElementFactoryBase} from "../cobraElementFactoryBase";
import {CobraButtonDefinition} from "./cobraButtonDefinition";

/**
 * Cobra Button Factory
 */
export class CobraButtonFactory extends CobraElementFactoryBase<CobraButtonDefinition, CobraButtonConfig, CobraButtonFactory> {
  constructor(config: CobraButtonConfig) {
    super(config, CobraButtonDefinition);
  }

  thatCalls(cb: (ctx: any) => void) {
    this.config.cb = cb;
    return this;
  }



}
