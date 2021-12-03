import {CobraElement} from "./cobraElement";
import {CobraElementConfig} from "./cobraElementConfig";

/**
 * CobraElementFactory to create new cobra elements
 */
export interface CobraElementFactory<TElement extends CobraElement<TConfig>, TConfig extends CobraElementConfig> {

  /**
   * Config of the element
   */
  config: TConfig;

  /**
   * Builds the CobraElement
   * @param ctx Context where the Element is used
   */
  build(ctx: any): TElement;
}
