import {CobraButtonConfig} from "./cobraButtonConfig";
import {CobraButtonDefinition} from "./cobraButtonDefinition";

/**
 * Factory function to create a new CobraButton
 * @param config Config for the Button
 * @constructor
 */
export function CobraButton(config?: CobraButtonConfig) {
  return new CobraButtonDefinition(config || {});
}
