import {CobraElementConfig} from "./cobraElementConfig";
import {CobraElement} from "./cobraElement";

/**
 * Base of CobraElements
 */
export class CobraElementBase<TCobraElementConfig extends CobraElementConfig> implements CobraElement<TCobraElementConfig>{

  constructor(public config: TCobraElementConfig) {
  }

}
