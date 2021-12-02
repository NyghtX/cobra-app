import {CobraElement} from "./cobraElement";
import {CobraElementConfig} from "./cobraElementConfig";

/**
 * CobraElementFactory to create new cobra elements
 */
export interface CobraElementFactory<TElement extends CobraElement<TConfig>, TConfig extends CobraElementConfig> {
  build(): TElement;
}
