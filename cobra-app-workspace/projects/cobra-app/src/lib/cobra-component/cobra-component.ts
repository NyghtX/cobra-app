import {CobraElement} from "../cobra-elements/cobraElement";
import {CobraComponentMode} from "./cobraComponentMode";

/**
 * Definition einer generischen CobraComponent, die innerhalb der CobraApp dargestellt werden kann
 */
export interface CobraComponent {
  /**
   * Title der Cobra-Component
   */
  title: string;

  /**
   * Mode, in which the component will be displayed
   */
  mode: CobraComponentMode

  /**
   * Action Elements, die für die CobraComponent angezeigt werden
   */
  actionElements: Array<CobraElement<any>>;

}
