import {CobraButtonConfig} from "./cobraButtonConfig";
import {CobraButtonFactory} from "./cobraButtonFactory";

/**
 * Factory function to create a new CobraButton
 * @param config Config for the Button
 * @constructor
 */
export function CobraButton(config?: CobraButtonConfig) {
  return new CobraButtonFactory(config || {});
}
