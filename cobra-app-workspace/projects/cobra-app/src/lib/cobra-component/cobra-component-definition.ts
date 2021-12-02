import {CobraElement} from "../cobra-elements/cobraElement";
import {CobraElementFactory} from "../cobra-elements/cobraElementFactory";

/**
 * Definition of a CobraComponent
 */
export interface CobraComponentDefinition {
  /**
   * Title, that will be displayed for the Component
   */
  title?: string;

  /**
   * List of action elements to be displayed
   * TODO Check for Types
   */
  actionElements?: Array<CobraElement<any> | CobraElementFactory<any, any>>;
}
