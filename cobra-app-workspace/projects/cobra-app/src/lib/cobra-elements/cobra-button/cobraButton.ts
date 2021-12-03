import {CobraButtonFactory} from "./cobraButtonFactory";

/**
 * Factory function to create a new CobraButton
 * @param label Label to be displayed inside the button
 * @constructor
 */
export function CobraButton(label?: string) {
  return new CobraButtonFactory({
    label
  });
}
