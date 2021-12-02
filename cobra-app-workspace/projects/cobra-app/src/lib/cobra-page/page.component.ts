import {Component, ContentChild, Input, TemplateRef} from '@angular/core';
import {CobraComponent} from "../cobra-component/cobra-component";

@Component({
  selector: 'cobra-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  /**
   * CobraComponent to be displayed inside of the page
   */
  @Input()
  who?: CobraComponent;

  /**
   * Content Template
   */
  @ContentChild('contentTemplate', {static: false})
  contentTemplateRef?: TemplateRef<any>;

  getComponentDefinition() {
    if(this.who)
      return (this.who as any).cobraComponent;
    return undefined;
  }

}
