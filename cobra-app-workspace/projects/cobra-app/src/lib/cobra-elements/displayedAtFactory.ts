import {CobraElement} from "./cobraElement";
import {CobraElementConfig} from "./cobraElementConfig";
import {CobraElementPosition} from "./cobraElementPosition";

/**
 * Factory to set the position of a CobraElement
 */
export class DisplayedAtFactory<TElement extends CobraElement<TConfig>, TConfig extends CobraElementConfig> {
  constructor(private element: TElement) {
  }

  /**
   * Displays the element at the right
   */
  theRight() {
    this.element.config.position = CobraElementPosition.right;
    return this.element;
  }

  /**
   * Displays the element at the left
   */
  theLeft() {
    this.element.config.position = CobraElementPosition.left;
    return this.element;
  }

  /**
   * Displays the element at the center
   */
  theCenter() {
    this.element.config.position = CobraElementPosition.center;
    return this.element;
  }

}
