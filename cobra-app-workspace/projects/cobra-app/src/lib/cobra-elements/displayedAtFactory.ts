import {CobraElement} from "./cobraElement";
import {CobraElementConfig} from "./cobraElementConfig";
import {CobraElementPosition} from "./cobraElementPosition";
import {CobraElementFactory} from "./cobraElementFactory";

/**
 * Factory to set the position of a CobraElement
 */
export class DisplayedAtFactory<TElement extends CobraElement<TConfig>, TConfig extends CobraElementConfig, TFactory extends CobraElementFactory<TElement, TConfig>> {
  constructor(private element: TFactory) {
  }

  /**
   * Displays the element at the right
   */
  theRight(): TFactory {
    this.element.config.position = CobraElementPosition.right;
    return this.element;
  }

  /**
   * Displays the element at the left
   */
  theLeft(): TFactory {
    this.element.config.position = CobraElementPosition.left;
    return this.element;
  }

  /**
   * Displays the element at the center
   */
  theCenter(): TFactory {
    this.element.config.position = CobraElementPosition.center;
    return this.element;
  }

}
