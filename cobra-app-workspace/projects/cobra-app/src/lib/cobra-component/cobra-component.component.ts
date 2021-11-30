import {Component, ContentChild, TemplateRef} from '@angular/core';
import {CobraComponent} from "./cobra-component";

@Component({
  selector: 'cobra-component',
  templateUrl: './cobra-component.component.html',
  styleUrls: ['./cobra-component.component.scss']
})
export class CobraComponentComponent {

  /**
   * Template zum Rendern des Header Wrappers
   */
  @ContentChild('headerWrapperTemplate', {static: false})
  headerWrapperTemplateRef!: TemplateRef<any>;
  /**
   * Template zum Rendern Contents
   */
  @ContentChild('contentTemplate', {static: false})
  contentTemplateRef!: TemplateRef<any>;
  /**
   * Template zum Rendern Actions
   */
  @ContentChild('actionsTemplate', {static: false})
  actionsTemplateRef!: TemplateRef<any>;

  // @ts-ignore
  private instanceValue: CobraFormBase;

  get instance() {
    return this.instanceValue;
  }

  set instance(val: CobraComponent) {
    this.instanceValue = val;
  }

}
