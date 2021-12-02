import { Component, OnInit } from '@angular/core';
import {DialogExampleComponent} from "./dialog-example/dialog-example.component";
import {CobraDialogService} from "../../../../../../cobra-app/src/lib/cobra-dialog/cobra-dialog.service";
import {CobraComponent} from "../../../../../../cobra-app/src/lib/cobra-component/cobra-component-decorator";
import {CobraButton} from "../../../../../../cobra-app/src/lib/cobra-elements/cobraButton";

@CobraComponent({
  title: "Examples - Dialog",
  actionElements: [
    CobraButton("Dialog öffnen")
      .displayedAt().theLeft()
  ]
})
@Component({
  selector: 'app-dialog-example-page',
  templateUrl: './dialog-example-page.component.html',
  styleUrls: ['./dialog-example-page.component.scss']
})
export class DialogExamplePageComponent implements OnInit {

  constructor(
    private dialog: CobraDialogService
  ) { }

  ngOnInit(): void {
  }

  async open() {
    await this.dialog.open(DialogExampleComponent);
  }
}
