import {CobraElement} from "../cobra-elements/cobraElement";
import {CobraComponentMode} from "./cobraComponentMode";

/**
 * Defines a CobraComponent
 */
export interface CobraComponent {
  /**
   * Mode, in which the component will be displayed
   */
  mode: CobraComponentMode

  /**
   * Action Elements, die für die CobraComponent angezeigt werden
   */
  actionElements: Array<CobraElement<any>>;
}
