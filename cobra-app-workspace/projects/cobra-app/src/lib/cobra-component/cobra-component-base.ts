import {CobraComponent} from "./cobra-component";
import {CobraElement} from "../cobra-elements/cobraElement";
import {Injectable} from "@angular/core";
import {CobraComponentMode} from "./cobraComponentMode";

@Injectable()
export abstract class CobraComponentBase implements CobraComponent {
  /**
   * ActionElements, die in der Component angezeigt werden sollen
   */
  public actionElements: Array<CobraElement<any>> = [];
  /**
   * Mode, in which the component will be displayed
   */
  mode = CobraComponentMode.Plain;



}
