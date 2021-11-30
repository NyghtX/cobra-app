import {Component} from '@angular/core';
import {CobraComponentBase} from "../../../../../../../cobra-app/src/lib/cobra-component/cobra-component-base";
import {CobraElement} from "../../../../../../../cobra-app/src/lib/cobra-elements/cobraElement";

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})
export class DialogExampleComponent extends CobraComponentBase {
  title = "Test"
  protected defineActionElements(): Array<CobraElement<any>> {
    return [

    ];
  }


}
