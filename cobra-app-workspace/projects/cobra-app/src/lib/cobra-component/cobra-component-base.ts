import {CobraComponent} from "./cobra-component";
import {CobraElement} from "../cobra-elements/cobraElement";
import {Injectable, OnInit} from "@angular/core";
import {CobraComponentMode} from "./cobraComponentMode";

@Injectable()
export abstract class CobraComponentBase implements CobraComponent, OnInit {
  /**
   * Definiert die Action Elemente, die für die Component angezeigt werden sollen
   * @protected
   */
  protected abstract defineActionElements(): Array<CobraElement<any>>;

  async ngOnInit() {
    // => Action Elemente sammeln
    await new Promise((resolve) => {
      setTimeout(() => {
        this.actionElements = this.defineActionElements();
        resolve(null);
      });
    });
  }

  /**
   * ActionElements, die in der Component angezeigt werden sollen
   */
  public actionElements: Array<CobraElement<any>> = [];

  /**
   * Mode, in which the component will be displayed
   */
  mode = CobraComponentMode.Plain;

}
