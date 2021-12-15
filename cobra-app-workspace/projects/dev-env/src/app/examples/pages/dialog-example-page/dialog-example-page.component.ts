import {Component} from '@angular/core';
import {DialogExampleComponent} from "./dialog-example/dialog-example.component";
import {CobraDialogService} from "../../../../../../cobra-app/src/lib/cobra-dialog/cobra-dialog.service";
import {CobraComponent} from "../../../../../../cobra-app/src/lib/cobra-component/cobra-component-decorator";
import {CobraButton} from "../../../../../../cobra-app/src/lib/cobra-elements/cobra-button/cobraButton";

@CobraComponent({
  title: "Examples - Dialog",
  actionElements: [
    CobraButton("Open Dialog")
      .displayedAt().theRight()
      .thatCalls(ctx => ctx.open())
      .addCss('color: red;')
      .addCss('margin: 100px;')
  ]
})
@Component({
  selector: 'app-dialog-example-page',
  templateUrl: './dialog-example-page.component.html',
  styleUrls: ['./dialog-example-page.component.scss']
})
export class DialogExamplePageComponent {
  constructor(
    private dialog: CobraDialogService
  ) { }

  /**
   * Opens the dialog
   */
  async open() {
    await this.dialog.open(DialogExampleComponent);
  }
}
